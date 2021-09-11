import { Field, InputType } from 'type-graphql';
import { Image } from '../../entity/Image';
import { Length } from 'class-validator';
import { seedDb } from '../../utils/seedDb';

@InputType()
//   Omit<
//      Image,
//      | 'imageId'
//      | 'restaurant'
//      | 'hasId'
//      | 'save'
//      | 'remove'
//      | 'softRemove'
//      | 'recover'
//      | 'reload'
//   >
export class ImageInput implements Partial<Image> {
   @Field()
   @Length(1, 500)
   url: string;

   @Field()
   restaurantId: number;
}

//seedDB.ts
