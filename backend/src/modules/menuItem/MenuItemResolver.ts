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
      return this.menuItemRepo.find();
   }

   @Query((returns) => MenuItem, { nullable: true })
   async getMenuById(@Arg('menuItemId', (type) => Int) menuItemId: number) {
      return this.menuItemRepo.findOne(menuItemId);
   }

   //for inserting in db
   @Mutation((returns) => MenuItem)
   async addMenu(
      @Arg('menuItemData')
      { name, price, calories, ingredients, menuMenuId }: MenuItemInput
   ): Promise<MenuItem> {
      const menuItem = await this.menuItemRepo
         .create({
            name,
            price,
            calories,
            ingredients,
            menuMenuId,
         })
         .save();

      return menuItem;
   }
}
