import { type } from 'os';
import { Field, Int, ObjectType } from 'type-graphql';
import {
   BaseEntity,
   Column,
   Entity,
   ManyToOne,
   PrimaryGeneratedColumn,
   RelationId,
} from 'typeorm';
import { Menu } from './Menu';

@ObjectType()
@Entity()
export class MenuItem extends BaseEntity {
   @Field(() => Int)
   @PrimaryGeneratedColumn()
   menuItemId: number;

   @Field((type) => String)
   @Column({ length: 255 })
   name: string;

   @Field()
   @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
   price: number;

   @Field((type) => Int)
   @Column()
   calories: number;

   @Field((type) => String)
   @Column()
   ingredients: string;

   @Field((type) => Int, { nullable: true })
   @Column({ nullable: true })
   menuMenuId?: number;

   //dodaj tu onda menuId i napravi vezu etc
   //    @Field((type) => Menu)
   @ManyToOne((type) => Menu)
   menu: Menu;
   //    @RelationId((menuItem: MenuItem) => menuItem.menu)
   //    menuId: number;
}
