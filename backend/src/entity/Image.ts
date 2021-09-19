import { Field, Int, ObjectType } from 'type-graphql';
import {
   BaseEntity,
   Column,
   Entity,
   JoinColumn,
   OneToOne,
   PrimaryGeneratedColumn,
} from 'typeorm';
import { Restaurant } from './Restaurant';

@ObjectType()
@Entity()
export class Image extends BaseEntity {
   @Field(() => Int)
   @PrimaryGeneratedColumn()
   id: number;

   @Field({ nullable: true })
   @Column({ nullable: true, length: 2000 })
   url: string;

   @Field(() => Int, { nullable: true })
   @Column({ nullable: true })
   restaurantId: number;

   @OneToOne((type) => Restaurant, (restaurant) => restaurant.image, {
      lazy: true,
   })
   @JoinColumn()
   restaurant: Restaurant;
}
