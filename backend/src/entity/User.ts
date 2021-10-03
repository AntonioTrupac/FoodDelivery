import {
   Entity,
   PrimaryGeneratedColumn,
   Column,
   BaseEntity,
   PrimaryColumn,
} from 'typeorm';
import { Field, ID, ObjectType, Root } from 'type-graphql';

@ObjectType()
@Entity()
export class User extends BaseEntity {
   @Field(() => ID)
   @PrimaryGeneratedColumn()
   @PrimaryColumn()
   userId: number;

   @Field()
   name(@Root() parent: User): string {
      return `${parent.firstName} ${parent.lastName}`;
   } // parent ce biti taj value koji u mutationu returnamo,
   //to trenutno ne koristim, izbacit cu u slucaju da mi nece trebat, a mislim da nece

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
}
