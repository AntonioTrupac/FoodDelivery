import { Resolver, Mutation, Arg, Int } from 'type-graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';

import { Upload } from '../../../types/Upload';

@Resolver()
export class ProfilePictureResolver {
   @Mutation((returns) => Boolean)
   async uploadRandomFile(
      @Arg('file', () => GraphQLUpload)
      { createReadStream, filename }: FileUpload
   ) {
      return new Promise(async (resolve, reject) =>
         createReadStream()
            .pipe(
               createWriteStream(`${__dirname}/../../../uploads/${filename}`, {
                  autoClose: true,
               })
            )
            .on('finish', () => resolve(true))
            .on('error', () => reject(false))
      );
   }
}
