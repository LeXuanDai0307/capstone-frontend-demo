import { BFFResolvers } from '../../@types';

export const categoryTypeDef = /* GraphQL */ `
  type Category {
    id: String!
    name: String!
  }
  input Category_Input {
    id: String!
    name: String!
  }

  type Query {
    categories: [Category]
    category(id: String!): Category
  }

  type Mutation {
    createCategory(data: Category_Input): Category
  }
`;

export const categoryResolver: BFFResolvers = {
  Query: {
    category: async (_, { id }, { dataSources }) => {
      const category = {
        id: '1',
        name: 'test',
      };
      const book = await dataSources.booksApi.getCategory(id);
      return {
        category,
        ...book,
      };
    },
    categories: async (_, __, { dataSources }) => {
      return dataSources.booksApi.getCategories();
    },
  },
  Mutation: {
    createCategory: async (_, { data }, { dataSources }) => {
      return dataSources.booksApi.createCategory(data);
    },
  },
};
