import { Field, ID, Int, ObjectType } from 'type-graphql';
import {
   BaseEntity,
   Column,
   Entity,
   JoinColumn,
   ManyToOne,
   PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from "./User";
@ObjectType()
@Entity()
export class Address extends BaseEntity {
   @Field(() => ID)
   @PrimaryGeneratedColumn()
   id: number;

   @Field({ nullable: true })
   @Column({ nullable: true })
   city: string;

   @Field({ nullable: true })
   @Column({ nullable: true })
   streetAddress: string;

   @Field(() => Int, { nullable: true })
   @Column({ nullable: true })
   houseNumber: number;

   @ManyToOne((type) => User, (user) => user.address)
   user: User;
   
}
