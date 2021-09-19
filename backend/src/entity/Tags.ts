import { Field, Int, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Tag extends BaseEntity {
   @Field((type) => Int)
   @PrimaryGeneratedColumn()
   id: number;

   @Field()
   @Column()
   tagName: string;
}
