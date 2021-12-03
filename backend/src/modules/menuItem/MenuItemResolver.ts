import {
   Arg,
   FieldResolver,
   Int,
   Mutation,
   Query,
   Resolver,
   Root,
} from 'type-graphql';
import { getRepository, Repository } from 'typeorm';
import { MenuItem } from '../../entity/MenuItem';
import { Tag } from '../../entity/Tags';
import { MenuItemInput } from './MenuItemInput';

@Resolver((of) => MenuItem)
export class MenuItemResolver {
   private readonly menuItemRepo: Repository<MenuItem>;
   private readonly tagRepo: Repository<Tag>;

   constructor() {
      this.menuItemRepo = getRepository(MenuItem);
      this.tagRepo = getRepository(Tag);
   }

   @Query((returns) => [MenuItem])
   async getMenuItems() {
      return await this.menuItemRepo.find({ relations: ['tag'] });
   }

   @Query((returns) => MenuItem, { nullable: true })
   async getMenuItemById(@Arg('id' , (type) => Int, {nullable: true}) id?: number) {
      if(id === undefined) {
         return;
      }

      return await this.menuItemRepo.findOne(id, { relations: ['tag'] });
   }

   @Query((returns) => [MenuItem])
   async getCategoriesByTagId(
      @Arg('tagId', (type) => Int) tagId: number,
      @Arg('menuId', (type) => Int) menuId: number
   ) {
      const itemCategories = this.menuItemRepo.find({
         where: { tagId, menuId },
      });
      console.log('item categories', itemCategories);
      return await itemCategories;
   }

   //for inserting in db
   @Mutation((returns) => MenuItem)
   async addMenuItems(
      @Arg('menuItemData')
      { name, price, calories, ingredients, menuId, tagId }: MenuItemInput
   ): Promise<MenuItem> {
      const menuItem = await this.menuItemRepo
         .create({
            name,
            price,
            calories,
            ingredients,
            menuId,
            tagId
         })
         .save();

      return menuItem;
   }

   //    @FieldResolver()
   //    async tag(@Root() parent: MenuItem) {}
}
