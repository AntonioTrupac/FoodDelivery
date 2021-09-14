import { Field, ID, Int, ObjectType } from 'type-graphql';
import {
   BaseEntity,
   Column,
   Entity,
   JoinColumn,
   OneToMany,
   OneToOne,
   PrimaryColumn,
   PrimaryGeneratedColumn,
} from 'typeorm';
import { MenuItem } from './MenuItem';
import { Restaurant } from './Restaurant';

@ObjectType()
@Entity()
export class Menu extends BaseEntity {
   @Field(() => Int)
   @PrimaryGeneratedColumn()
   @PrimaryColumn()
   menuId: number;

   @Field({ nullable: true })
   @Column({ nullable: true, length: 255 })
   menuName?: string;

   @Field(() => Int)
   @Column()
   restaurantRestaurantId: number;

   @OneToOne((type) => Restaurant, (restaurant) => restaurant.menu, {
      lazy: true,
   })
   @JoinColumn()
   restaurant: Restaurant;

   @Field((type) => [MenuItem])
   @OneToMany((type) => MenuItem, (menuItem) => menuItem.menu)
   menus?: MenuItem[];
}
