/* eslint-disable @typescript-eslint/ban-types */
import dataSources from '../dataSources/booksAPI';
import { IResolvers } from 'graphql-tools';
import { Resolvers, Scalars } from './graphql-schema';

export declare global {
  type ID = Scalars['ID'];
  type Maybe<T> = T | null;

  type AsyncReturnType<T extends Function> = T extends (
    ...args: unknown
  ) => Promise<infer U>
    ? U
    : T extends (...args: unknown) => infer U
    ? U
    : unknown;
}

export type DataSources = ReturnType<typeof dataSources>;

interface Context extends AsyncReturnType<typeof context> {
  dataSources: DataSources;
}

export type BFFResolvers = IResolvers & Resolvers<Context>;
