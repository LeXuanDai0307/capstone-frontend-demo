// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import OpenapiHandler from "@graphql-mesh/openapi"
import { parse } from 'graphql';
import UseMock from "@graphql-mesh/plugin-mock";
import RenameTransform from "@graphql-mesh/transform-rename";
import EncapsulateTransform from "@graphql-mesh/transform-encapsulate";
import { resolveAdditionalResolvers } from '@graphql-mesh/utils';
import StitchingMerger from "@graphql-mesh/merger-stitching";
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { BooksTypes } from './sources/Books/types';
import * as importedModule$0 from "./sources/Books/schemaWithAnnotations";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ObjMap: { input: any; output: any; }
  ResolveToSourceArgs: { input: any; output: any; }
};

export type Query = {
  Books: BooksQuery;
};

export type Mutation = {
  Books: BooksMutation;
};

export type Book = {
  id: Scalars['String']['output'];
  authorId: Scalars['String']['output'];
  categorieId: Scalars['String']['output'];
  title: Scalars['String']['output'];
  category?: Maybe<Category>;
};

export type Category = {
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  Book: ResolverTypeWrapper<Book>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Category: ResolverTypeWrapper<Category>;
  Book_Input: Book_Input;
  Category_Input: Category_Input;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ObjMap: ResolverTypeWrapper<Scalars['ObjMap']['output']>;
  HTTPMethod: HTTPMethod;
  BooksQuery: ResolverTypeWrapper<BooksQuery>;
  BooksMutation: ResolverTypeWrapper<BooksMutation>;
  ResolveToSourceArgs: ResolverTypeWrapper<Scalars['ResolveToSourceArgs']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Mutation: {};
  Book: Book;
  String: Scalars['String']['output'];
  Category: Category;
  Book_Input: Book_Input;
  Category_Input: Category_Input;
  Boolean: Scalars['Boolean']['output'];
  ObjMap: Scalars['ObjMap']['output'];
  BooksQuery: BooksQuery;
  BooksMutation: BooksMutation;
  ResolveToSourceArgs: Scalars['ResolveToSourceArgs']['output'];
}>;

export type globalOptionsDirectiveArgs = {
  sourceName?: Maybe<Scalars['String']['input']>;
  endpoint?: Maybe<Scalars['String']['input']>;
  operationHeaders?: Maybe<Scalars['ObjMap']['input']>;
  queryStringOptions?: Maybe<Scalars['ObjMap']['input']>;
  queryParams?: Maybe<Scalars['ObjMap']['input']>;
};

export type globalOptionsDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = globalOptionsDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type httpOperationDirectiveArgs = {
  path?: Maybe<Scalars['String']['input']>;
  operationSpecificHeaders?: Maybe<Scalars['ObjMap']['input']>;
  httpMethod?: Maybe<HTTPMethod>;
  isBinary?: Maybe<Scalars['Boolean']['input']>;
  requestBaseBody?: Maybe<Scalars['ObjMap']['input']>;
  queryParamArgMap?: Maybe<Scalars['ObjMap']['input']>;
  queryStringOptionsByParam?: Maybe<Scalars['ObjMap']['input']>;
};

export type httpOperationDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = httpOperationDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type resolveToDirectiveArgs = {
  requiredSelectionSet?: Maybe<Scalars['String']['input']>;
  sourceName: Scalars['String']['input'];
  sourceTypeName: Scalars['String']['input'];
  sourceFieldName: Scalars['String']['input'];
  sourceSelectionSet?: Maybe<Scalars['String']['input']>;
  sourceArgs?: Maybe<Scalars['ResolveToSourceArgs']['input']>;
  keyField?: Maybe<Scalars['String']['input']>;
  keysArg?: Maybe<Scalars['String']['input']>;
  pubsubTopic?: Maybe<Scalars['String']['input']>;
  filterBy?: Maybe<Scalars['String']['input']>;
  additionalArgs?: Maybe<Scalars['ResolveToSourceArgs']['input']>;
  result?: Maybe<Scalars['String']['input']>;
  resultType?: Maybe<Scalars['String']['input']>;
};

export type resolveToDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = resolveToDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  Books?: Resolver<ResolversTypes['BooksQuery'], ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  Books?: Resolver<ResolversTypes['BooksMutation'], ParentType, ContextType>;
}>;

export type BookResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Book'] = ResolversParentTypes['Book']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  authorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  categorieId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CategoryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface ObjMapScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ObjMap'], any> {
  name: 'ObjMap';
}

export type BooksQueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BooksQuery'] = ResolversParentTypes['BooksQuery']> = ResolversObject<{
  books?: Resolver<Maybe<Array<Maybe<ResolversTypes['Book']>>>, ParentType, ContextType>;
  categories?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  book?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType, RequireFields<BooksQuerybookArgs, 'id'>>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<BooksQuerycategoryArgs, 'id'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BooksMutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['BooksMutation'] = ResolversParentTypes['BooksMutation']> = ResolversObject<{
  create?: Resolver<Maybe<ResolversTypes['Book']>, ParentType, ContextType, Partial<BooksMutationcreateArgs>>;
  createCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, Partial<BooksMutationcreateCategoryArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface ResolveToSourceArgsScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ResolveToSourceArgs'], any> {
  name: 'ResolveToSourceArgs';
}

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Book?: BookResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  ObjMap?: GraphQLScalarType;
  BooksQuery?: BooksQueryResolvers<ContextType>;
  BooksMutation?: BooksMutationResolvers<ContextType>;
  ResolveToSourceArgs?: GraphQLScalarType;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  globalOptions?: globalOptionsDirectiveResolver<any, any, ContextType>;
  httpOperation?: httpOperationDirectiveResolver<any, any, ContextType>;
  resolveTo?: resolveToDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = BooksTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".mesh/sources/Books/schemaWithAnnotations":
      return Promise.resolve(importedModule$0) as T;
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("🕸️  Mesh");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const booksTransforms = [];
const booksHandler = new OpenapiHandler({
              name: "Books",
              config: {"endpoint":"http://localhost:3002/","source":"./services/books-service/books-definition.json"},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("Books"),
              logger: logger.child("Books"),
              importFn,
            });
const additionalTypeDefs = [parse("extend type Book {\n  category: Category @resolveTo(sourceName: \"Books\", sourceTypeName: \"Query\", sourceFieldName: \"AppController_category\", requiredSelectionSet: \"{ categorieId }\", sourceArgs: {id: \"{root.categorieId}\"})\n}"),] as any[];
additionalEnvelopPlugins[0] = await UseMock({
          ...({
  "if": true,
  "preserveResolvers": false,
  "mocks": [
    {
      "apply": "Book.id",
      "faker": "{{datatype.uuid}}"
    },
    {
      "apply": "Book.authorId",
      "faker": "{{datatype.uuid}}"
    },
    {
      "apply": "Book.categorieId",
      "faker": "{{datatype.uuid}}"
    },
    {
      "apply": "Book.title",
      "faker": "{{name.firstName}}"
    },
    {
      "apply": "BooksQuery.books",
      "length": 10
    },
    {
      "apply": "Category.id",
      "faker": "{{datatype.uuid}}"
    },
    {
      "apply": "Category.name",
      "faker": "{{name.gender}}"
    }
  ]
}),
          logger: logger.child("mock"),
          cache,
          pubsub,
          baseDir,
          importFn,
        })
booksTransforms[0] = new RenameTransform({
                  apiName: "Books",
                  config: {"renames":[{"from":{"type":"Query","field":"AppController_(.*)"},"to":{"type":"Query","field":"$1"},"useRegExpForFields":true},{"from":{"type":"Mutation","field":"AppController_(.*)"},"to":{"type":"Mutation","field":"$1"},"useRegExpForFields":true}]},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
booksTransforms[1] = new EncapsulateTransform({
                  apiName: "Books",
                  config: {"applyTo":{"query":true,"mutation":true,"subscription":false}},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
sources[0] = {
          name: 'Books',
          handler: booksHandler,
          transforms: booksTransforms
        }
const additionalResolvers = [] as any[]
additionalTypeDefs.unshift(parse(/* GraphQL */`
        scalar ResolveToSourceArgs
        directive @resolveTo(
          requiredSelectionSet: String
          sourceName: String!
          sourceTypeName: String!
          sourceFieldName: String!
          sourceSelectionSet: String
          sourceArgs: ResolveToSourceArgs
          keyField: String
          keysArg: String
          pubsubTopic: String
          filterBy: String
          additionalArgs: ResolveToSourceArgs
          result: String
          resultType: String
        ) on FIELD_DEFINITION
      `))
const additionalResolversFromTypeDefs = await resolveAdditionalResolvers(
          baseDir,
          [{"targetTypeName":"Book","targetFieldName":"category","sourceName":"Books","sourceTypeName":"Query","sourceFieldName":"AppController_category","requiredSelectionSet":"{ categorieId }","sourceArgs":{"id":"{root.categorieId}"}}],
          importFn,
          pubsub
        );
additionalResolvers.push(...additionalResolversFromTypeDefs)
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: undefined,
  })
}


let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));