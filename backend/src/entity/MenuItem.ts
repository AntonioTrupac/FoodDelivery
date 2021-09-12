import { isDecimal } from 'class-validator';
import { type } from 'os';
import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class MenuItem extends BaseEntity {
   @Field(() => Int)
   @PrimaryGeneratedColumn()
   menuItemId: number;

   @Field()
   @Column({ length: 255 })
   menuItemName: string;

   @Field()
   @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
   menuItemPrice: number;

   @Field()
   @Column()
   menuItemCalories: number;

   @Field()
   @Column()
   menuItemIngredients: string;

   //dodaj tu onda menuId i napravi vezu etc
}
