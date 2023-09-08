import { BFFResolvers } from '../../@types';

export const bookTypeDef = /* GraphQL */ `
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
    createBook(data: Book_Input): Book
  }
`;

export const bookResolver: BFFResolvers = {
  Query: {
    book: async (_, { id }, { dataSources }) => {
      const category = {
        id: '1',
        name: 'test',
      };
      const book = await dataSources.booksApi.getBook(id);
      return {
        category,
        ...book,
      };
    },
    books: async (_, __, { dataSources }) => {
      return dataSources.booksApi.getBooks();
    },
  },
  Mutation: {
    createBook: async (_, { data }, { dataSources }) => {
      return dataSources.booksApi.createBook(data);
    },
  },
};
