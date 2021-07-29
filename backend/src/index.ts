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
import { verify } from 'jsonwebtoken';
import { User } from './entity/User';
import { createAccessToken, createRefreshToken } from './modules/auth';
import { sendRefreshToken } from './utils/sendRefreshToken';

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

   //refreshing the jwt token
   app.post('/refresh_token', async (req, res) => {
      const token = req.cookies.jid;
      console.log('token', token);
      console.log('SECRET', process.env.ACCESS_TOKEN_REFRESH);
      if (!token) {
         return res.send({ ok: false, accessToken: '' });
      }

      let payload: any = null;
      try {
         payload = verify(token, process.env.ACCESS_TOKEN_REFRESH!);
         console.log('payload', payload);
      } catch (err) {
         console.log(err);
         console.error(err.message);
         return res.send({ ok: false, accessToken: '' });
      }

      // token is valid and
      // we can send back an access token
      const user = await User.findOne({ id: payload.userId });

      if (!user) {
         return res.send({ ok: false, accessToken: '' });
      }

      if (user.tokenVersion !== payload.tokenVersion) {
         return res.send({ ok: false, accessToken: '' });
      }

      sendRefreshToken(res, createRefreshToken(user));

      return res.send({ ok: true, accessToken: createAccessToken(user) });
   });

   app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }));

   apolloServer.applyMiddleware({ app, cors: false });

   app.listen(PORT, () => {
      console.log(`Running on localhost ${PORT} ⚡`);
   });
};

main();
