import { Field, ID, Int, ObjectType } from 'type-graphql';
import {
   BaseEntity,
   Column,
   Entity,
   OneToMany,
   PrimaryColumn,
   PrimaryGeneratedColumn,
} from 'typeorm';
import {} from 'class-validator';
import { Order } from './Order';

@ObjectType()
@Entity()
export class Employee extends BaseEntity {
   @Field(() => Int)
   @PrimaryGeneratedColumn()
   id: number;

   @Field()
   @Column()
   firstName: string;

   @Field()
   @Column()
   lastName: string;

   @OneToMany((type) => Order, (order) => order.employee)
   orders: Order[];
}