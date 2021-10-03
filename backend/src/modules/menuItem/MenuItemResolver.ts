import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import { getRepository, Repository } from 'typeorm';
import { MenuItem } from '../../entity/MenuItem';
import { MenuItemInput } from './MenuItemInput';

@Resolver((of) => MenuItem)
export class MenuItemResolver {
   private readonly menuItemRepo: Repository<MenuItem>;

   constructor() {
      this.menuItemRepo = getRepository(MenuItem);
   }

   @Query((returns) => [MenuItem])
   async getMenuItems() {
      return await this.menuItemRepo.find({ relations: ['tag'] });
   }

   @Query((returns) => MenuItem, { nullable: true })
   async getMenuItemById(@Arg('id', (type) => Int) id: number) {
      return await this.menuItemRepo.findOne(id, { relations: ['tag'] });
   }

   //for inserting in db
   @Mutation((returns) => MenuItem)
   async addMenu(
      @Arg('menuItemData')
      { name, price, calories, ingredients, menuId }: MenuItemInput
   ): Promise<MenuItem> {
      const menuItem = await this.menuItemRepo
         .create({
            name,
            price,
            calories,
            ingredients,
            menuId,
         })
         .save();

      return menuItem;
   }
}
