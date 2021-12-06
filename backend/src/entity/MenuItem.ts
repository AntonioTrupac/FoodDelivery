import { Field, Int, ObjectType } from 'type-graphql';
import {
   BaseEntity,
   Column,
   Entity,
   ManyToOne,
   OneToMany,
   PrimaryGeneratedColumn,
} from 'typeorm';
import { Menu } from './Menu';
import { OrderItem } from './OrderItem';
import { Tag } from './Tags';

@ObjectType()
@Entity()
export class MenuItem extends BaseEntity {
   @Field(() => Int)
   @PrimaryGeneratedColumn()
   id: number;

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
   menuId?: number;

   @ManyToOne((type) => Menu)
   menu: Menu;

   @Field((type) => Int, { nullable: true })
   @Column()
   tagId?: number;

   @Field((type) => Tag, { nullable: true })
   @ManyToOne((type) => Tag, { nullable: true })
   tag: Tag;

   @OneToMany((type) => OrderItem, (oItem) => oItem.menuItem)
   items: OrderItem[];
}
