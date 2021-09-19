import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql';
import { Image } from '../../entity/Image';
import { ImageInput } from './ImageInput';

@Resolver((of) => Image)
export class ImageResolver {
   //FOR TESTING
   @Query(() => [Image])
   async getImages() {
      const getAll = Image.find();
      return getAll;
   }

   @Query(() => Image)
   async getImageById(@Arg('imageId', (type) => Int) imageId: number) {
      return Image.findOne(imageId);
   }

   //mutation for testing
   @Mutation(() => Image)
   async addImage(
      @Arg('imageData')
      { url, restaurantId }: ImageInput
   ): Promise<Image> {
      const image = await Image.create({
         url,
         restaurantId,
      }).save();

      return image;
   }
}
