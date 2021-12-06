import { Field, Float, Int, ObjectType } from 'type-graphql';
import {
   BaseEntity,
   Column,
   Entity,
   OneToMany,
   OneToOne,
   PrimaryGeneratedColumn,
} from 'typeorm';
import { Image } from '../entity/Image';
import { Menu } from './Menu';
import { Order } from './Order';

@ObjectType()
@Entity()
export class Restaurant extends BaseEntity {
   @Field((type) => Int)
   @PrimaryGeneratedColumn()
   id: number;

   @Field((type) => String)
   @Column({ length: 255 })
   restaurantName: string;

   @Field((type) => String)
   @Column({ length: 255 })
   restaurantRating: string; //has to be an array of floats

   @Field((type) => String)
   @Column({ length: 255 })
   deliveryTime: string;

   @Field((type) => String, { nullable: true })
   @Column({ length: 50, nullable: true })
   openFrom: string;

   @Field((type) => String, { nullable: true })
   @Column({ length: 50, nullable: true })
   openUntil: string;

   @Field((type) => Float, { nullable: true })
   @Column({
      type: 'decimal',
      precision: 5,
      scale: 2,
      default: 0,
      nullable: true,
   })
   deliveryPrice: number;

   @Field((type) => Image, { nullable: true })
   @OneToOne(() => Image, (image) => image.restaurant, {
      lazy: true,
      cascade: ['insert', 'update', 'remove', 'soft-remove', 'recover'],
   })
   image?: Image;

   @Field((type) => Menu, { nullable: true })
   @OneToOne(() => Menu, (menu) => menu.restaurant, {
      lazy: true,
      cascade: ['insert', 'update', 'remove', 'soft-remove', 'recover'],
   })
   menu?: Menu;

   @OneToMany((type) => Order, (order) => order.restaurant)
   orders: Order[];
}
