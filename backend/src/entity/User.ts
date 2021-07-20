import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { Field, ID, ObjectType, Root } from 'type-graphql';

@ObjectType()
@Entity()
export class User extends BaseEntity {
   @Field(() => ID)
   @PrimaryGeneratedColumn()
   id: number;

   @Column({ nullable: true })
   uid: string;

   @Field()
   name(@Root() parent: User): string {
      return `${parent.firstName} ${parent.lastName}`;
   } // parent ce biti taj value koji u mutationu returnamo

   @Field()
   @Column('text', { nullable: true, unique: true })
   email: string;

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
   phoneNumber: number;

   @Column({ nullable: true, length: 16 })
   salt: string;

   @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
   createdAt: string;

   @Column('bool', { default: true })
   confirmed: boolean;

   @Column('int', {default: 0})
   tokenVersion: number;
}
