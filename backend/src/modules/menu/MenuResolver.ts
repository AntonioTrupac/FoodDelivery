import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import { Menu } from '../../entity/Menu';
import { MenuInput } from './input/MenuInput';

@Resolver((of) => Menu)
export class MenuResolver {
   @Query((returns) => [Menu])
   async getMenus() {
      const getAllMenus = Menu.find();
      return getAllMenus;
   }

   @Query((returns) => Menu, { nullable: true })
   async getMenuById(@Arg('menuId', (type) => Int) menuId: number) {
      return Menu.findOne(menuId);
   }

   //mutation for testing the db
   @Mutation((returns) => Menu)
   async addMenu(
      @Arg('menuData') { menuName, ingredients, calories, price }: MenuInput
   ): Promise<Menu> {
      const menu = await Menu.create({
         menuName,
         ingredients,
         calories,
         price,
      }).save();

      return menu;
   }
}
