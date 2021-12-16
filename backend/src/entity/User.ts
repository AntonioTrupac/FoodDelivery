import {
   Entity,
   PrimaryGeneratedColumn,
   Column,
   BaseEntity,
   PrimaryColumn,
   OneToMany,
   ManyToMany,
   ManyToOne,
} from 'typeorm';
import { Field, ID, ObjectType, Root } from 'type-graphql';
import { Order } from './Order';
import { Address } from './Address';

@ObjectType()
@Entity()
export class User extends BaseEntity {
   @Field(() => ID)
   @PrimaryGeneratedColumn()
   @PrimaryColumn()
   id: number;

   @Field()
   @Column('text', { nullable: true, unique: true })
   email: string;

   //no field cus we dont want user to know the password or query for the password
   @Column({ nullable: true, length: 128 })
   password: string;

   @Field()
   @Column({ nullable: true, length: 200 })
   firstName: string;

   @Field()
   @Column({ nullable: true, length: 200 })
   lastName: string;

   @Field()
   @Column({ nullable: true })
   phoneNumber: string;

   @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
   createdAt: string;

   @OneToMany((type) => Order, (order) => order.customer)
   orders: Order[];

   @ManyToOne((type) => Address, (address) => address.user)
   address: Address[];
}
