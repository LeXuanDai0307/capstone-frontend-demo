import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { bookResolver, bookTypeDef } from './book';
import { makeExecutableSchema } from '@graphql-tools/schema';

export const typeDefs = mergeTypeDefs([bookTypeDef]);
export const resolvers = mergeResolvers([bookResolver]);

export default makeExecutableSchema({
  typeDefs,
  resolvers,
  inheritResolversFromInterfaces: true,
  resolverValidationOptions: {
    requireResolversForResolveType: 'ignore',
  },
});
