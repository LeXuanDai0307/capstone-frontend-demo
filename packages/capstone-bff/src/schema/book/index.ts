import { BFFResolvers } from '../../@types';

export const bookTypeDef = /* GraphQL */ `
  type Category {
    id: String!
    name: String!
  }

  type Book {
    id: String!
    authorId: String!
    categorieId: String!
    title: String!
    category: Category
  }

  input Book_Input {
    id: String!
    authorId: String!
    categorieId: String!
    title: String!
  }

  type Query {
    books: [Book]
    book(id: String!): Book
  }

  type Mutation {
    create(input: Book_Input): Book
  }
`;

export const bookResolver: BFFResolvers = {
  Query: {
    book: async (_, { id }, { dataSources }) => {
      return dataSources.booksApi.getBook(id);
    },
    books: async (_, __, { dataSources }) => {
      return dataSources.booksApi.getBooks();
    },
  },
  Mutation: {
    create() {
      return 'Hello world!';
    },
  },
};
