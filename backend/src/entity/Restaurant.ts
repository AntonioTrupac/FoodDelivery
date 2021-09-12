import { Field, ID, Int, ObjectType } from 'type-graphql';
import { TypeormLoader } from 'type-graphql-dataloader';
import {
   BaseEntity,
   Column,
   Entity,
   OneToOne,
   PrimaryGeneratedColumn,
} from 'typeorm';
import { Image } from '../entity/Image';
import { Menu } from './Menu';

@ObjectType()
@Entity()
export class Restaurant extends BaseEntity {
   @Field(() => Int)
   @PrimaryGeneratedColumn()
   restaurantId: number;

   @Field()
   @Column({ length: 255 })
   restaurantName: string;

   @Field()
   @Column({ length: 255 })
   restaurantRating: string; //has to be an array of floats

   @Field()
   @Column({ length: 255 })
   restaurantPhoto: string;

   @Field()
   @Column({ length: 255 })
   deliveryTime: string;

   @Field((type) => Image, { nullable: true })
   @OneToOne(() => Image, (image) => image.restaurant, {
      lazy: true,
      cascade: true,
   })
   image?: Image;

   @Field((type) => Menu, { nullable: true })
   @OneToOne(() => Menu, (menu) => menu.restaurant, {
      lazy: true,
      cascade: ['insert', 'update', 'remove', 'soft-remove', 'recover'],
   })
   menu?: Menu;
}
