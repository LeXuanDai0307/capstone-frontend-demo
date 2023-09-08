import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { bookResolver, bookTypeDef } from './book';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { categoryResolver, categoryTypeDef } from './category';

export const typeDefs = mergeTypeDefs([bookTypeDef, categoryTypeDef]);
export const resolvers = mergeResolvers([bookResolver, categoryResolver]);

export default makeExecutableSchema({
  typeDefs,
  resolvers,
  inheritResolversFromInterfaces: true,
  resolverValidationOptions: {
    requireResolversForResolveType: 'ignore',
  },
});
