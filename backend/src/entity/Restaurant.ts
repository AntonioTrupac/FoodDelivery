import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Restaurant extends BaseEntity {
   @PrimaryGeneratedColumn()
   @Field()
   restaurantId: number;

   @Field()
   restaurantName: string;

   @Field()
   restaurantRating: string;

   @Field()
   restaurantPhoto: string;

   @Field()
   deliveryTime: string;

   @Field()
   addressId: number;

   @Field()
   menuId: number;
}
