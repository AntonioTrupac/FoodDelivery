import { Field, ID, Int, ObjectType } from 'type-graphql';
import {
   BaseEntity,
   Column,
   Entity,
   PrimaryColumn,
   PrimaryGeneratedColumn,
} from 'typeorm';
import {} from 'class-validator';
@ObjectType()
@Entity()
export class Address extends BaseEntity {
   @Field(() => ID)
   @PrimaryGeneratedColumn()
   @PrimaryColumn()
   addressId: number;

   @Field({ nullable: true })
   @Column({ nullable: true })
   city: string;

   @Field({ nullable: true })
   @Column({ nullable: true })
   streetAddress: string;

   @Field(() => Int, { nullable: true })
   @Column({ nullable: true })
   houseNumber: number;

   @Field()
   @Column()
   areaCode: number;
}
