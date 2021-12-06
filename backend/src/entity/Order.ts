import { Field, Float, ID, Int, ObjectType } from 'type-graphql';
import {
   BaseEntity,
   Column,
   Entity,
   ManyToOne,
   OneToMany,
   PrimaryColumn,
   PrimaryGeneratedColumn,
} from 'typeorm';
import {} from 'class-validator';
import { User } from './User';
import { Restaurant } from './Restaurant';
import { Employee } from './Employee';
import { OrderItem } from './OrderItem';

@ObjectType()
@Entity()
export class Order extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field((type) => User)
    @ManyToOne((type) => User)
    customer: User;

    @Field((type) => Restaurant)
    @ManyToOne((type) => Restaurant)
    restaurant: Restaurant;

    @Field((type) => Employee, {nullable: true})
    @ManyToOne((type) => Employee)
    employee?: Employee;

    @Field(() => Float)
    @Column()
    total: number;

    @Field()
    @Column({ type: 'timestamptz', nullable: true, })
    deliveredAt?: Date

    @OneToMany((type) => OrderItem, (oItem) => oItem.order)
    items: OrderItem[];
}