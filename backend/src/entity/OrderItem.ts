import { Field, ID, Int, ObjectType } from 'type-graphql';
import {
   BaseEntity,
   Column,
   Entity,
   ManyToOne,
   PrimaryColumn,
   PrimaryGeneratedColumn,
} from 'typeorm';
import {} from 'class-validator';
import { Order } from './Order';
import { MenuItem } from './MenuItem';

@ObjectType()
@Entity()
export class OrderItem extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field((type) => Order)
    @ManyToOne((type) => Order)
    order: Order;

    @Field((type) => MenuItem)
    @ManyToOne((type) => MenuItem)
    menuItem: MenuItem;

    @Field(() => Int)
    @Column()
    quantity: number;
}