/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import http from 'http';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';
import * as path from 'path';
import schema from './schema';
import dataSources from './dataSources';
import { createBuiltMeshHTTPHandler } from '@libs/shared-common/graphql-mesh';
config();

interface MyContext {
  token?: string | string[];
}

const app: Application = express();
// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app);

// Same ApolloServer initialization as before, plus the drain plugin
// for our httpServer.
const server = new ApolloServer<MyContext>({
  schema,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
// Ensure we wait for our server to start
await server.start();

// Set up our Express middleware to handle CORS, body parsing,
// and our expressMiddleware function.
app.use(
  '/graphqlV2',
  cors<cors.CorsRequest>(),
  bodyParser.json(),
  // expressMiddleware accepts the same arguments:
  // an Apollo Server instance and optional configuration options
  expressMiddleware(server, {
    context: async ({ req }) => ({
      token: req.headers.token,
      dataSources: dataSources(),
    }),
  })
);

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req: Request, res: Response, next: NextFunction) => {
  res.send('Express server with TypeScript');
});

app.use('/graphql', createBuiltMeshHTTPHandler());

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
