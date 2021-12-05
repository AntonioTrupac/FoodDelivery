import { Arg, Query, Resolver } from 'type-graphql';
import { getConnection, getRepository, Like, Repository } from 'typeorm';
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
      const sql = `
      SELECT * FROM restaurant WHERE "restaurantName" ILIKE '%' || $1 || '%'
      UNION
      SELECT r.* FROM restaurant r
      JOIN menu m ON m."restaurantId" = r."id"
      JOIN tag t ON t."id" = m."tagId"
      WHERE t."tagName" ILIKE '%' || $1 || '%'`;
      return await getConnection().manager.query(sql, [ search ]);
   }
}
