import { Field, ID, Int, ObjectType } from 'type-graphql';
import {
   BaseEntity,
   Column,
   Entity,
   JoinColumn,
   ManyToOne,
   OneToMany,
   OneToOne,
   PrimaryGeneratedColumn,
   RelationId,
} from 'typeorm';
import { MenuItem } from './MenuItem';
import { Restaurant } from './Restaurant';
import { Tag } from './Tags';

export type Lazy<T extends object> = Promise<T> | T;

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
   @OneToMany((type) => MenuItem, (menuItem) => menuItem.menu, {
      cascade: true,
   })
   menuItems?: MenuItem[];

   @Field((type) => Tag, { nullable: true })
   @ManyToOne((type) => Tag, { nullable: true })
   tag: Tag;
}
