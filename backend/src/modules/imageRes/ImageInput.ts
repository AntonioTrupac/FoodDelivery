import { Field, InputType } from 'type-graphql';
import { Image } from '../../entity/Image';
import { Length } from 'class-validator';

@InputType()
export class ImageInput implements Partial<Image> {
   @Field()
   @Length(1, 500)
   url: string;

   @Field()
   restaurantId: number;
}
