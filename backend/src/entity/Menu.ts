import { Field, ID, Int, ObjectType } from 'type-graphql';
import {
   BaseEntity,
   Column,
   Entity,
   JoinColumn,
   OneToMany,
   OneToOne,
   PrimaryGeneratedColumn,
} from 'typeorm';
import { MenuItem } from './MenuItem';
import { Restaurant } from './Restaurant';
import { Tag } from './Tags';

@ObjectType()
@Entity()
export class Menu extends BaseEntity {
   @Field(() => Int)
   @PrimaryGeneratedColumn()
   id: number;

   @Field({ nullable: true })
   @Column({ nullable: true, length: 255 })
   menuName?: string;

   @Field(() => Int, { nullable: true })
   @Column({ nullable: true })
   restaurantId: number;

   @OneToOne((type) => Restaurant, (restaurant) => restaurant.menu, {
      lazy: true,
   })
   @JoinColumn()
   restaurant: Restaurant;

   @Field((type) => [MenuItem])
   @OneToMany((type) => MenuItem, (menuItem) => menuItem.menu)
   menuItems?: MenuItem[];

   @Field(() => Int, { nullable: true })
   @Column({ nullable: true })
   tagId: number; // probably mi ne treba

   @Field()
   @OneToOne((type) => Tag)
   @JoinColumn()
   tag: Tag;
}
