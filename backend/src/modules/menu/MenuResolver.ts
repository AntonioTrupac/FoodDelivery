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
      return getAllMenus;
   }

   @Query((returns) => Menu, { nullable: true })
   async getMenuById(@Arg('id', (type) => Int) id: number) {
      const menu = await Menu.findOne(id, { relations: ['tag'] });
      return menu;
   }

   //mutation for testing the db
   @Mutation((returns) => Menu)
   async addMenu(
      @Arg('menuData') { menuName, restaurantId }: MenuInput
   ): Promise<Menu> {
      const menu = await Menu.create({
         menuName,
         restaurantId,
      }).save();

      return menu;
   }

   @FieldResolver()
   async menuItems(@Root() menu: Menu) {
      const items = await this.menuItemRepo.find({
         cache: 1000,
         where: { menuId: menu.id },
         relations: ['tag'],
      });

      console.log('ITEMS', items);

      if (!items) {
         throw new Error('No menu items!');
      }

      return items;
   }
}
