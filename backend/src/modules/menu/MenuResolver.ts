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
import { Menu } from '../../entity/Menu';
import { MenuItem } from '../../entity/MenuItem';
import { MenuInput } from './input/MenuInput';

@Resolver((of) => Menu)
export class MenuResolver {
   private readonly menuItemRepo: Repository<MenuItem>;
   constructor() {
      this.menuItemRepo = getRepository(MenuItem);
   }

   @Query((returns) => [Menu])
   async getMenus() {
      const getAllMenus = Menu.find();
      console.log('MENU ITEM REPO', this.menuItemRepo);
      return getAllMenus;
   }

   @Query((returns) => Menu, { nullable: true })
   async getMenuById(@Arg('menuId', (type) => Int) menuId: number) {
      return Menu.findOne(menuId);
   }

   //mutation for testing the db
   @Mutation((returns) => Menu)
   async addMenu(
      @Arg('menuData') { menuName, restaurantRestaurantId }: MenuInput
   ): Promise<Menu> {
      const menu = await Menu.create({
         menuName,
         restaurantRestaurantId,
      }).save();

      return menu;
   }

   @FieldResolver()
   async menus(@Root() menu: Menu) {
      const items = await this.menuItemRepo.find({
         cache: 1000,
         where: { menuMenuId: { menuId: menu.menuId } },
      });

      if (!items) {
         throw new Error('No menu items!');
      }
      return items;
   }
}
