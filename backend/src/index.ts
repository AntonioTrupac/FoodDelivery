import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import cors from 'cors';
import { graphqlUploadExpress } from 'graphql-upload';
import * as fs from 'fs';
import { printSchema } from 'graphql';
import cookieParser from 'cookie-parser';
import { RestaurantResolver } from './modules/restaurant/RestaurantResolver';
import { UserReslover } from './modules/user/UserReslover';
import { ImageResolver } from './modules/imageRes/ImageResolver';
import { MenuResolver } from './modules/menu/MenuResolver';
// import { verify } from 'jsonwebtoken';
// import { User } from './entity/User';
// import { createAccessToken, createRefreshToken } from './modules/auth';
// import { sendRefreshToken } from './utils/sendRefreshToken';

dotenv.config();
const { PORT } = process.env;
if (!process.env.PORT) {
   process.exit(1);
}

const main = async () => {
   await createConnection().catch((error) => console.log(error));
   const schema = await buildSchema({
      resolvers: [
         RestaurantResolver,
         UserReslover,
         ImageResolver,
         MenuResolver,
      ],
      authChecker: ({ context: { req } }) => {
         return !!req.session.userId;
      },
   });

   fs.writeFile(
      __dirname + '/../../common/gql/generated.schema.graphql',
      `${printSchema(schema)}`,
      (err) => {
         if (err) {
            return console.log(err);
         }
         console.log('The file was saved');
      }
   );

   const apolloServer = new ApolloServer({
      schema,
      context: ({ req, res }: any) => ({ req, res }), // we can access session data based on req
      introspection: true,
      uploads: false, //disable apollo upload property
   });

   const app = express();
   app.use(cookieParser());

   app.use(
      cors({
         credentials: true,
         origin: 'http://localhost:3000',
      })
   );

   app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

   apolloServer.applyMiddleware({ app, cors: false });

   app.listen(PORT, () => {
      console.log(`Running on localhost ${PORT} ⚡`);
   });
};

main();
