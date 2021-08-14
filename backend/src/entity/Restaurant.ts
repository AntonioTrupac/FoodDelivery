import { Field, ID, ObjectType } from 'type-graphql';
import {
   BaseEntity,
   Column,
   Entity,
   PrimaryColumn,
   PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant extends BaseEntity {
   @Field(() => ID)
   @PrimaryGeneratedColumn()
   @PrimaryColumn()
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

   @Field({ nullable: true })
   @Column({ nullable: true })
   addressId: number;

   @Field({ nullable: true })
   @Column({ nullable: true })
   menuId: number;
}
