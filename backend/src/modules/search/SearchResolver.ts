import { Arg, Query, Resolver } from 'type-graphql';
import { getRepository, Repository } from 'typeorm';
import { Restaurant } from '../../entity/Restaurant';

@Resolver()
export class SearchResolver {
   constructor(private readonly restaurantRepository: Repository<Restaurant>) {
      this.restaurantRepository = getRepository(Restaurant);
   }

   @Query((returns) => [Restaurant])
   async search(
      @Arg('search', { defaultValue: '' }) search?: string
   ): Promise<Restaurant[]> {
      return await this.restaurantRepository.find({
         where: `"restaurantName" ILIKE '%${search}%' OR "tagName" ILIKE '%${search}%'`,
         relations: ['menu', 'menu.tag'],
      });
   }
}
