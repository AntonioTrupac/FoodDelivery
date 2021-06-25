import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';
import dotenv from 'dotenv';
import { createConnection } from 'typeorm';
import session from 'express-session';
import connectRedis from 'connect-redis';
import cors from 'cors';
import { RegisterResolver } from './modules/user/Register';
import { redis } from './redis';
import { LoginResolver } from './modules/user/Login';
import { MeResolver } from './modules/user/Me';
import { ConfirmUserResolver } from './modules/user/ConfirmUser';
import {graphqlUploadExpress} from "graphql-upload";
import * as fs from "fs";
import {printSchema} from "graphql";

dotenv.config();
const { PORT } = process.env;
if (!process.env.PORT) {
   process.exit(1);
}

const main = async () => {
   await createConnection().catch((error) => console.log(error));
   const schema = await buildSchema({
      resolvers: [`${__dirname}/modules/**/*.ts`],
      authChecker: ({ context: { req } }) => {
         return !!req.session.userId;
      },
   });

   fs.writeFile(__dirname + '/../../common/gql/generated.schema.graphql', `${printSchema(schema)}`, err => {
      if(err) {
         return console.log(err);
      }

      console.log('The file was saved');
   })

   const apolloServer = new ApolloServer({
      schema,
      context: ({ req, res }: any) => ({ req, res }), // we can acess session data based on req
      introspection: true,
      uploads: false //disable apollo upload property
   });

   const app = express();

   app.use(graphqlUploadExpress({maxFileSize: 10000000, maxFiles: 10 }))

   const RedisStore = connectRedis(session);

   app.use(
      cors({
         credentials: true,
         origin: 'http://localhost:3000',
      })
   );

   // has to be before apply middleware
   app.use(
      session({
         store: new RedisStore({
            client: redis as any,
         }),
         name: 'qid', // cookie name
         secret: 'asidjije21933123', // TODO plejsaj ovo u env file tenkju
         resave: false,
         saveUninitialized: false, // to dvoje turn off da ne kreiramo novi session uvijek
         cookie: {
            httpOnly: true, // so js cant access it
            secure: process.env.NODE_ENV === 'production',
            maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years how long cookie lasts
         },
      } as any)
   );

   apolloServer.applyMiddleware({ app });

   app.listen(PORT, () => {
      console.log(`Running on localhost ${PORT} ⚡`);
   });
};

main();
