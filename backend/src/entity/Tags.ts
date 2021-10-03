import { Field, Int, ObjectType } from 'type-graphql';
import {
   BaseEntity,
   Column,
   Entity,
   OneToMany,
   PrimaryGeneratedColumn,
} from 'typeorm';
import { Menu } from './Menu';
import { MenuItem } from './MenuItem';

@ObjectType()
@Entity()
export class Tag extends BaseEntity {
   @Field((type) => Int)
   @PrimaryGeneratedColumn()
   id: number;

   @Field()
   @Column()
   tagName: string;

   @OneToMany((type) => Menu, (menu) => menu.tag)
   tag: Menu[];

   @OneToMany((type) => MenuItem, (menuItem) => menuItem.tag)
   tagMenuItem: MenuItem[];
}
