import { Field, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Sale extends BaseEntity {
   @Field()
   @PrimaryGeneratedColumn()
   id: number;

   @Field()
   @Column()
   discountPercentage: number;

   @Field()
   @Column()
   validFrom: Date;

   @Field()
   @Column()
   validUntil: Date;
}
