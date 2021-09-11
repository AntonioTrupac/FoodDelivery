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

@ObjectType()
@Entity()
export class Restaurant extends BaseEntity {
   @Field(() => Int)
   @PrimaryGeneratedColumn()
   restaurantId: number;

   @Field({ nullable: true })
   @Column({ nullable: true, length: 255 })
   restaurantName: string;

   @Field({ nullable: true })
   @Column({ nullable: true, length: 255 })
   restaurantRating: string; //has to be an array of floats

   @Field({ nullable: true })
   @Column({ nullable: true, length: 255 })
   restaurantPhoto: string;

   @Field({ nullable: true })
   @Column({ nullable: true, length: 255 })
   deliveryTime: string;

   @Field((type) => Image, { nullable: true })
   @OneToOne(() => Image, (image) => image.restaurant, {
      lazy: true,
      cascade: true,
   })
   image?: Image;
}
