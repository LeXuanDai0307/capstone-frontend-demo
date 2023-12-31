// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace BooksTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ObjMap: { input: any; output: any; }
};

export type Query = {
  Books: BooksQuery;
};

export type Book = {
  id: Scalars['String']['output'];
  authorId: Scalars['String']['output'];
  categorieId: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type Category = {
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Mutation = {
  Books: BooksMutation;
};

export type Book_Input = {
  id: Scalars['String']['input'];
  authorId: Scalars['String']['input'];
  categorieId: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type Category_Input = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type HTTPMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

export type BooksQuery = {
  books?: Maybe<Array<Maybe<Book>>>;
  categories?: Maybe<Array<Maybe<Category>>>;
  book?: Maybe<Book>;
  category?: Maybe<Category>;
};


export type BooksQuerybookArgs = {
  id: Scalars['String']['input'];
};


export type BooksQuerycategoryArgs = {
  id: Scalars['String']['input'];
};

export type BooksMutation = {
  create?: Maybe<Book>;
  createCategory?: Maybe<Category>;
};


export type BooksMutationcreateArgs = {
  input?: InputMaybe<Book_Input>;
};


export type BooksMutationcreateCategoryArgs = {
  input?: InputMaybe<Category_Input>;
};

  export type QuerySdk = {
      /** undefined **/
  Books: InContextSdkMethod<Query['Books'], {}, MeshContext>
  };

  export type MutationSdk = {
      /** undefined **/
  Books: InContextSdkMethod<Mutation['Books'], {}, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Books"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
