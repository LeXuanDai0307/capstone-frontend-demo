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
import { createBuiltMeshHTTPHandler } from '@libs/shared-common';
import { config } from 'dotenv';
import express, { Application, NextFunction, Request, Response } from 'express';
import * as path from 'path';
config();

interface MyContext {
  token?: string;
}

const typeDefs = `
  #graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  # This "Book" type defines the queryable fields for every book in our data source.
	# This Book type has two fields: title and author
	type Book {
		title: String # returns a String
		author: Author # returns an Author
	}
	type Author {
		name: String!
		books: [Book] # A list of Books
	}
	input Content {
		title: String
		author: String
	}
	
  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  type Query {
		books: [Book]
		authors: [Author]
	}
	type Mutation {
		addBook(content: Content): Book
	}
`;

const books = [
  {
    title: 'The Awakening',
    author: {
      name: 'Kate Chopin',
    },
  },
  {
    title: 'City of Glass',
    author: {
      name: 'Paul Auster',
    },
  },
];

const authors = [
  {
    name: 'Kate Chopin',
  },
  {
    name: 'Paul Auster',
  },
];

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
    authors: () => authors,
  },
};

const app: Application = express();
// Our httpServer handles incoming requests to our Express app.
// Below, we tell Apollo Server to "drain" this httpServer,
// enabling our servers to shut down gracefully.
const httpServer = http.createServer(app);

// Same ApolloServer initialization as before, plus the drain plugin
// for our httpServer.
const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
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
    context: async ({ req }) => ({ token: req.headers.token }),
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
