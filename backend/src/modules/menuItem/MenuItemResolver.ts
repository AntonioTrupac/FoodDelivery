import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import { getRepository, Repository } from 'typeorm';
import { MenuItem } from '../../entity/MenuItem';
import { MenuItemInput } from './MenuItemInput';

@Resolver((of) => MenuItem)
export class MenuItemResolver {
   //    private readonly menuItemRepo: Repository<MenuItem>;
   //    constructor() {
   //       this.menuItemRepo = getRepository(MenuItem);
   //    }

   @Query((returns) => [MenuItem])
   async getMenuItems() {
      return await MenuItem.find();
   }

   @Query((returns) => MenuItem, { nullable: true })
   async getMenuItemById(@Arg('id', (type) => Int) id: number) {
      return await MenuItem.findOne(id);
   }

   //for inserting in db
   @Mutation((returns) => MenuItem)
   async addMenu(
      @Arg('menuItemData')
      { name, price, calories, ingredients, menuId }: MenuItemInput
   ): Promise<MenuItem> {
      const menuItem = await MenuItem.create({
         name,
         price,
         calories,
         ingredients,
         menuId,
      }).save();

      return menuItem;
   }
}
