import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { Field, ID, ObjectType, Root } from 'type-graphql';

@ObjectType()
@Entity()
export class User extends BaseEntity {
   @Field(() => ID)
   @PrimaryGeneratedColumn()
   id: number;

   @Field()
   name(@Root() parent: User): string {
      return `${parent.firstName} ${parent.lastName}`;
   } // parent ce biti taj value koji u mutationu returnamo

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

   @Column({ nullable: true, length: 16 })
   salt: string;

   @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
   createdAt: string;

   @Column('int', { default: 0 })
   tokenVersion: number;
}
