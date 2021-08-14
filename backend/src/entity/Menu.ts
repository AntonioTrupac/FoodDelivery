import { Field, ID, Int, ObjectType } from 'type-graphql';
import {
   BaseEntity,
   Column,
   Entity,
   PrimaryColumn,
   PrimaryGeneratedColumn,
} from 'typeorm';

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
   description: string;

   @Field(() => Int)
   @Column({ nullable: true })
   calories: number;

   @Field()
   @Column({ nullable: true })
   price: number;
}
