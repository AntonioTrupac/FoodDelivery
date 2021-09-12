import { Field, ID, Int, ObjectType } from 'type-graphql';
import {
   BaseEntity,
   Column,
   Entity,
   JoinColumn,
   OneToOne,
   PrimaryColumn,
   PrimaryGeneratedColumn,
} from 'typeorm';
import { Restaurant } from './Restaurant';

@ObjectType()
@Entity()
export class Menu extends BaseEntity {
   @Field(() => ID)
   @PrimaryGeneratedColumn()
   @PrimaryColumn()
   menuId: number;

   @Field()
   @Column({ nullable: true, length: 255 })
   menuName: string;

   @Field()
   @Column({ nullable: true, length: 255 })
   ingredients: string;

   @Field(() => Int)
   @Column({ nullable: true })
   calories: number;

   @Field()
   @Column({ nullable: true })
   price: number;

   @Field(() => Int)
   @Column()
   restaurantRestaurantId: number;

   @OneToOne((type) => Restaurant, (restaurant) => restaurant.menu, {
      lazy: true,
   })
   @JoinColumn()
   restaurant: Restaurant;
}
