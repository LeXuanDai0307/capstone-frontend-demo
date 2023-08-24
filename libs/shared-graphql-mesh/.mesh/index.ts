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
import type { CitiesTypes } from './sources/Cities/types';
import * as importedModule$0 from "./sources/Books/schemaWithAnnotations";
import * as importedModule$1 from "./sources/Cities/schemaWithAnnotations";
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
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean; }
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: { input: number; output: number; }
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: { input: number; output: number; }
  ObjMap: { input: any; output: any; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: bigint; output: bigint; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: Date | string; output: Date | string; }
  ResolveToSourceArgs: { input: any; output: any; }
};

export type Query = {
  Books: BooksQuery;
  Cities: CitiesQuery;
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

/** A list of populated places */
export type Populated_Places_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
  data?: Maybe<Array<Maybe<PopulatedPlaceSummary>>>;
};

/** An error that occurred processing the request */
export type Error = {
  code?: Maybe<ErrorCode>;
  message?: Maybe<Scalars['String']['output']>;
};

/**
 * One of a set of enumerated error codes representing the types of errors that can occur processing a
 * request
 */
export type ErrorCode =
  | 'ACCESS_DENIED'
  | 'ENTITY_NOT_FOUND'
  | 'INCOMPATIBLE'
  | 'PARAM_INVALID'
  | 'PARAMS_MUTUALLY_EXCLUSIVE'
  | 'REQUEST_UNPROCESSABLE';

/** A HATEAOS link */
export type Link = {
  href?: Maybe<Scalars['String']['output']>;
  rel?: Maybe<Scalars['String']['output']>;
};

/** Result metadata (currently only associated with collection results) */
export type Metadata = {
  /** The zero-ary offset into the results (0 is the first result) */
  currentOffset?: Maybe<Scalars['BigInt']['output']>;
  /** The total number of results across pages */
  totalCount?: Maybe<Scalars['BigInt']['output']>;
};

/** Minimal populated-place info */
export type PopulatedPlaceSummary = {
  /** The country name (varies by languageCode) */
  country?: Maybe<Scalars['String']['output']>;
  /** The ISO-3166 country code */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** Included if this is the result of a distance query */
  distance?: Maybe<Scalars['Float']['output']>;
  /** The place GeoDB native id */
  id?: Maybe<Scalars['Int']['output']>;
  /** The place latittude (-90.0 to 90.0) */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** The place longitude (-180.0 to 180.0) */
  longitude?: Maybe<Scalars['Float']['output']>;
  /** The place name (varies by languageCode) */
  name?: Maybe<Scalars['String']['output']>;
  /** The place population */
  population?: Maybe<Scalars['Int']['output']>;
  /** The region name (varies by languageCode) */
  region?: Maybe<Scalars['String']['output']>;
  /** The ISO or FIPS region code */
  regionCode?: Maybe<Scalars['String']['output']>;
  type?: Maybe<PopulatedPlaceType>;
  /** The place WikiData id */
  wikiDataId?: Maybe<Scalars['String']['output']>;
};

/**
 * One of a set of enumerated populated-place types known by the service (currently only level-2 admin divisions and
 * cities)
 */
export type PopulatedPlaceType =
  | 'ADM2'
  | 'CITY';

/** Populated-place details response */
export type Populated_Place_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  data?: Maybe<Populated_Place_Details>;
};

/** Full populated-place details */
export type Populated_Place_Details = {
  /** The country name (varies by languageCode) */
  country?: Maybe<Scalars['String']['output']>;
  /** The ISO-3166 country code */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** If this place has been soft-deleted */
  deleted?: Maybe<Scalars['Boolean']['output']>;
  /** The place elevation (meters) above sea level */
  elevationMeters?: Maybe<Scalars['Int']['output']>;
  /** The place GeoDB native id */
  id?: Maybe<Scalars['Int']['output']>;
  /** The place latittude (-90.0 to 90.0) */
  latitude?: Maybe<Scalars['Float']['output']>;
  /** The place longitude (-180.0 to 180.0) */
  longitude?: Maybe<Scalars['Float']['output']>;
  /** The place name (varies by languageCode) */
  name?: Maybe<Scalars['String']['output']>;
  /** The place population */
  population?: Maybe<Scalars['Int']['output']>;
  /** The region name (varies by languageCode) */
  region?: Maybe<Scalars['String']['output']>;
  /** The ISO or FIPS region code */
  regionCode?: Maybe<Scalars['String']['output']>;
  /** The place timezone id */
  timezone?: Maybe<Scalars['String']['output']>;
  type?: Maybe<PopulatedPlaceType>;
  /** The place WikiData id */
  wikiDataId?: Maybe<Scalars['String']['output']>;
};

/** An ISO-6801 date-time response */
export type Date_Time_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  /** The date-time in ISO-6801 format: yyyyMMdd'T'HHmmssZ */
  data?: Maybe<Scalars['DateTime']['output']>;
};

/** A decimal distance (in miles or kilometers) */
export type Distance_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  /** The distance in units as set by the distanceUnit param (defaults to miles) */
  data?: Maybe<Scalars['Float']['output']>;
};

/** An ISO-8601 time response */
export type Time_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  /** The time in ISO-8601 format: HHmmss.SSSZ */
  data?: Maybe<Scalars['String']['output']>;
};

/** A list of countries */
export type Countries_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
  data?: Maybe<Array<Maybe<Country_Summary>>>;
};

/** Minimal country info */
export type Country_Summary = {
  /** The ISO-3166 country code */
  code?: Maybe<Scalars['String']['output']>;
  /** A list of supported ISO-4217 currency codes */
  currencyCodes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The country name (varies by languageCode) */
  name?: Maybe<Scalars['String']['output']>;
  /** The country WikiData id */
  wikiDataId?: Maybe<Scalars['String']['output']>;
};

/** Country details response */
export type Country_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  data?: Maybe<Country_Details>;
};

/** Full country details */
export type Country_Details = {
  /** The country dialing prefix */
  callingCode?: Maybe<Scalars['String']['output']>;
  /** The ISO-3166 country code */
  code?: Maybe<Scalars['String']['output']>;
  /** A list of supported ISO-4217 currency codes */
  currencyCodes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The country flag image */
  flagImageUri?: Maybe<Scalars['String']['output']>;
  /** The country name (varies by languageCode) */
  name?: Maybe<Scalars['String']['output']>;
  /** The number of regions in this country */
  numRegions?: Maybe<Scalars['Int']['output']>;
  /** The country WikiData id */
  wikiDataId?: Maybe<Scalars['String']['output']>;
};

/** A list of country regions */
export type Country_Regions_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
  /** A list of RegionSummaries */
  data?: Maybe<Array<Maybe<Country_Region_Summary>>>;
};

/** Minimal country region info */
export type Country_Region_Summary = {
  /** An ISO-3166 country code */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** The FIPS 10-4 region code */
  fipsCode?: Maybe<Scalars['String']['output']>;
  /** The ISO region code */
  isoCode?: Maybe<Scalars['String']['output']>;
  /** The region name (varies by languageCode) */
  name?: Maybe<Scalars['String']['output']>;
  /** The region WikiData id */
  wikiDataId?: Maybe<Scalars['String']['output']>;
};

/** Country region details response */
export type Country_Region_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  data?: Maybe<Country_Region_Details>;
};

/** Full country region details */
export type Country_Region_Details = {
  /** The region's capital city (varies by languageCode) */
  capital?: Maybe<Scalars['String']['output']>;
  /** An ISO-3166 country code */
  countryCode?: Maybe<Scalars['String']['output']>;
  /** The FIPS 10-4 region code */
  fipsCode?: Maybe<Scalars['String']['output']>;
  /** The ISO region code */
  isoCode?: Maybe<Scalars['String']['output']>;
  /** The region name (varies by languageCode) */
  name?: Maybe<Scalars['String']['output']>;
  /** The number of cities in this region */
  numCities?: Maybe<Scalars['Int']['output']>;
  /** The region WikiData id */
  wikiDataId?: Maybe<Scalars['String']['output']>;
};

/** A list of currencies */
export type Currencies_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
  data?: Maybe<Array<Maybe<Currency>>>;
};

/** Currency info */
export type Currency = {
  /** The ISO-4217 currency code */
  code?: Maybe<Scalars['String']['output']>;
  /** A list of ISO-3166 country codes of countries supporting this currency */
  countryCodes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The currency symbol */
  symbol?: Maybe<Scalars['String']['output']>;
};

/** A list of languages supported by the system */
export type Languages_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
  data?: Maybe<Array<Maybe<Language>>>;
};

/** A language supported by the service */
export type Language = {
  code?: Maybe<query_getLanguagesUsingGET_allOf_1_data_items_code>;
  name?: Maybe<Scalars['String']['output']>;
};

export type query_getLanguagesUsingGET_allOf_1_data_items_code =
  | 'undefined'
  | 'aa'
  | 'ab'
  | 'ae'
  | 'af'
  | 'ak'
  | 'am'
  | 'an'
  | 'ar'
  | 'as'
  | 'av'
  | 'ay'
  | 'az'
  | 'ba'
  | 'be'
  | 'bg'
  | 'bh'
  | 'bi'
  | 'bm'
  | 'bn'
  | 'bo'
  | 'br'
  | 'bs'
  | 'ca'
  | 'ce'
  | 'ch'
  | 'co'
  | 'cr'
  | 'cs'
  | 'cu'
  | 'cv'
  | 'cy'
  | 'da'
  | 'de'
  | 'dv'
  | 'dz'
  | 'ee'
  | 'el'
  | 'en'
  | 'eo'
  | 'es'
  | 'et'
  | 'eu'
  | 'fa'
  | 'ff'
  | 'fi'
  | 'fj'
  | 'fo'
  | 'fr'
  | 'fy'
  | 'ga'
  | 'gd'
  | 'gl'
  | 'gn'
  | 'gu'
  | 'gv'
  | 'ha'
  | 'he'
  | 'hi'
  | 'ho'
  | 'hr'
  | 'ht'
  | 'hu'
  | 'hy'
  | 'hz'
  | 'ia'
  | 'id'
  | 'ie'
  | 'ig'
  | 'ii'
  | 'ik'
  | 'io'
  | 'is'
  | 'it'
  | 'iu'
  | 'ja'
  | 'jv'
  | 'ka'
  | 'kg'
  | 'ki'
  | 'kj'
  | 'kk'
  | 'kl'
  | 'km'
  | 'kn'
  | 'ko'
  | 'kr'
  | 'ks'
  | 'ku'
  | 'kv'
  | 'kw'
  | 'ky'
  | 'la'
  | 'lb'
  | 'lg'
  | 'li'
  | 'ln'
  | 'lo'
  | 'lt'
  | 'lu'
  | 'lv'
  | 'mg'
  | 'mh'
  | 'mi'
  | 'mk'
  | 'ml'
  | 'mn'
  | 'mr'
  | 'ms'
  | 'mt'
  | 'my'
  | 'na'
  | 'nb'
  | 'nd'
  | 'ne'
  | 'ng'
  | 'nl'
  | 'nn'
  | 'no'
  | 'nr'
  | 'nv'
  | 'ny'
  | 'oc'
  | 'oj'
  | 'om'
  | 'or'
  | 'os'
  | 'pa'
  | 'pi'
  | 'pl'
  | 'ps'
  | 'pt'
  | 'qu'
  | 'rm'
  | 'rn'
  | 'ro'
  | 'ru'
  | 'rw'
  | 'sa'
  | 'sc'
  | 'sd'
  | 'se'
  | 'sg'
  | 'si'
  | 'sk'
  | 'sl'
  | 'sm'
  | 'sn'
  | 'so'
  | 'sq'
  | 'sr'
  | 'ss'
  | 'st'
  | 'su'
  | 'sv'
  | 'sw'
  | 'ta'
  | 'te'
  | 'tg'
  | 'th'
  | 'ti'
  | 'tk'
  | 'tl'
  | 'tn'
  | 'to'
  | 'tr'
  | 'ts'
  | 'tt'
  | 'tw'
  | 'ty'
  | 'ug'
  | 'uk'
  | 'ur'
  | 'uz'
  | 've'
  | 'vi'
  | 'vo'
  | 'wa'
  | 'wo'
  | 'xh'
  | 'yi'
  | 'yo'
  | 'za'
  | 'zh'
  | 'zu';

/** A list of locales */
export type Locales_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
  data?: Maybe<Array<Maybe<Locale>>>;
};

/** A locale representing a language/region combination */
export type Locale = {
  /** The locale code */
  code?: Maybe<Scalars['String']['output']>;
};

/** A list of time-zones */
export type Time_Zones_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  links?: Maybe<Array<Maybe<Link>>>;
  metadata?: Maybe<Metadata>;
  data?: Maybe<Array<Maybe<Time_Zone>>>;
};

/** A time-zone */
export type Time_Zone = {
  /** The time-zone id */
  id?: Maybe<Scalars['String']['output']>;
  /** The time-zone name */
  name?: Maybe<Scalars['String']['output']>;
  /** The number of hours this time-zone is offset from UTC */
  rawUtcOffsetHours?: Maybe<Scalars['Int']['output']>;
};

/** A time-zone */
export type Time_Zone_Response = {
  errors?: Maybe<Array<Maybe<Error>>>;
  /** The time-zone id */
  id?: Maybe<Scalars['String']['output']>;
  /** The time-zone name */
  name?: Maybe<Scalars['String']['output']>;
  /** The number of hours this time-zone is offset from UTC */
  rawUtcOffsetHours?: Maybe<Scalars['Int']['output']>;
};

export type CitiesQuery = {
  /**
   * Find administrative divisions, filtering by optional criteria. If no criteria are set, you will get back all
   * known divisions.
   *
   */
  findAdminDivisions?: Maybe<Populated_Places_Response>;
  /**
   * Get the details for a specific administrative division, including location coordinates, population, and
   * elevation above sea-level (if available).
   *
   */
  getAdminDivision?: Maybe<Populated_Place_Response>;
  /**
   * Find cities near the given administrative division, filtering by optional criteria. If no criteria are set, you
   * will get back all known cities.
   *
   */
  findCitiesNearAdminDivision?: Maybe<Populated_Places_Response>;
  /**
   * Find administrative divisions near the given origin division, filtering by optional criteria. If no criteria
   * are set, you will get back all known divisions.
   *
   */
  findDivisionsNearAdminDivision?: Maybe<Populated_Places_Response>;
  /**
   * Find cities, filtering by optional criteria. If no criteria are set, you will get back all known cities.
   *
   */
  findCities?: Maybe<Populated_Places_Response>;
  /**
   * Get the details for a specific city, including location coordinates, population, and elevation above sea-level
   * (if available).
   *
   */
  getCity?: Maybe<Populated_Place_Response>;
  /** Get city date-time */
  getCityDateTime?: Maybe<Date_Time_Response>;
  /** Get distance from the given city */
  getCityDistance?: Maybe<Distance_Response>;
  /**
   * Get the details for the containing populated place (e.g., its county or other administrative division), including location coordinates, population, and elevation above sea-level
   * (if available).
   *
   */
  getCityLocatedIn?: Maybe<Populated_Place_Response>;
  /**
   * Find cities near the given origin city, filtering by optional criteria. If no criteria are set, you will get
   * back all known cities.
   *
   */
  findCitiesNearCity?: Maybe<Populated_Places_Response>;
  /** Get city time */
  getCityTime?: Maybe<Time_Response>;
  /**
   * Find countries, filtering by optional criteria. If no criteria are set, you will get back all known countries.
   *
   */
  getCountries?: Maybe<Countries_Response>;
  /** Get the details for a specific country, including number of regions. */
  getCountry?: Maybe<Country_Response>;
  /**
   * Get all regions in a specific country. These could be states, provinces, districts, or otherwise major
   * political divisions.
   *
   */
  getRegions?: Maybe<Country_Regions_Response>;
  /** Get the details of a specific country region, including number of cities. */
  getRegion?: Maybe<Country_Region_Response>;
  /**
   * Get the administrative divisions in a specific country region. The country and region info is omitted in the
   * response.
   *
   */
  findRegionDivisions?: Maybe<Populated_Places_Response>;
  /**
   * Get the cities in a specific country region. The country and region info is omitted in the response.
   *
   */
  findRegionCities?: Maybe<Populated_Places_Response>;
  /**
   * Find cities near the given location, filtering by optional criteria. If no criteria are set, you will get back
   * all known cities.
   *
   */
  findCitiesNearLocation?: Maybe<Populated_Places_Response>;
  /**
   * Find administrative divisions near the given location, filtering by optional criteria. If no criteria are set,
   * you will get back all known divisions.
   *
   */
  findDivisionsNearLocation?: Maybe<Populated_Places_Response>;
  /** Find currencies, filtering by optional criteria. If no criteria are set, you will get back all known currencies. */
  getCurrencies?: Maybe<Currencies_Response>;
  /** Get all supported languages */
  getLanguages?: Maybe<Languages_Response>;
  /** Get all known locales */
  getLocales?: Maybe<Locales_Response>;
  /** Get all known time-zones */
  getTimezones?: Maybe<Time_Zones_Response>;
  /** Get time-zone */
  getTimeZone?: Maybe<Time_Zone_Response>;
  /** Get time-zone date-time */
  getTimeZoneDateTime?: Maybe<Date_Time_Response>;
  /** Get time-zone time */
  getTimeZoneTime?: Maybe<Time_Response>;
};


export type CitiesQueryfindAdminDivisionsArgs = {
  location?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type CitiesQuerygetAdminDivisionArgs = {
  divisionId: Scalars['String']['input'];
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
};


export type CitiesQueryfindCitiesNearAdminDivisionArgs = {
  divisionId: Scalars['String']['input'];
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type CitiesQueryfindDivisionsNearAdminDivisionArgs = {
  divisionId: Scalars['String']['input'];
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type CitiesQueryfindCitiesArgs = {
  location?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type CitiesQuerygetCityArgs = {
  cityId: Scalars['String']['input'];
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
};


export type CitiesQuerygetCityDateTimeArgs = {
  cityId: Scalars['String']['input'];
};


export type CitiesQuerygetCityDistanceArgs = {
  cityId: Scalars['String']['input'];
  toCityId: Scalars['String']['input'];
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
};


export type CitiesQuerygetCityLocatedInArgs = {
  cityId: Scalars['String']['input'];
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
};


export type CitiesQueryfindCitiesNearCityArgs = {
  cityId: Scalars['String']['input'];
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type CitiesQuerygetCityTimeArgs = {
  cityId: Scalars['String']['input'];
};


export type CitiesQuerygetCountriesArgs = {
  currencyCode?: InputMaybe<Scalars['String']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type CitiesQuerygetCountryArgs = {
  countryId: Scalars['String']['input'];
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
};


export type CitiesQuerygetRegionsArgs = {
  countryId: Scalars['String']['input'];
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};


export type CitiesQuerygetRegionArgs = {
  countryId: Scalars['String']['input'];
  regionCode: Scalars['String']['input'];
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
};


export type CitiesQueryfindRegionDivisionsArgs = {
  countryId: Scalars['String']['input'];
  regionCode: Scalars['String']['input'];
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type CitiesQueryfindRegionCitiesArgs = {
  countryId: Scalars['String']['input'];
  regionCode: Scalars['String']['input'];
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type CitiesQueryfindCitiesNearLocationArgs = {
  locationId: Scalars['String']['input'];
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  types?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type CitiesQueryfindDivisionsNearLocationArgs = {
  locationId: Scalars['String']['input'];
  radius?: InputMaybe<Scalars['Int']['input']>;
  distanceUnit?: InputMaybe<Scalars['String']['input']>;
  countryIds?: InputMaybe<Scalars['String']['input']>;
  excludedCountryIds?: InputMaybe<Scalars['String']['input']>;
  minPopulation?: InputMaybe<Scalars['Int']['input']>;
  maxPopulation?: InputMaybe<Scalars['Int']['input']>;
  namePrefix?: InputMaybe<Scalars['String']['input']>;
  namePrefixDefaultLangResults?: InputMaybe<Scalars['Boolean']['input']>;
  timeZoneIds?: InputMaybe<Scalars['String']['input']>;
  asciiMode?: InputMaybe<Scalars['Boolean']['input']>;
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  languageCode?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  includeDeleted?: InputMaybe<Scalars['String']['input']>;
};


export type CitiesQuerygetCurrenciesArgs = {
  countryId: Scalars['String']['input'];
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type CitiesQuerygetLanguagesArgs = {
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type CitiesQuerygetLocalesArgs = {
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type CitiesQuerygetTimezonesArgs = {
  hateoasMode?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type CitiesQuerygetTimeZoneArgs = {
  zoneId: Scalars['String']['input'];
};


export type CitiesQuerygetTimeZoneDateTimeArgs = {
  zoneId: Scalars['String']['input'];
};


export type CitiesQuerygetTimeZoneTimeArgs = {
  zoneId: Scalars['String']['input'];
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
  Book: ResolverTypeWrapper<Book>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Category: ResolverTypeWrapper<Category>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ObjMap: ResolverTypeWrapper<Scalars['ObjMap']['output']>;
  HTTPMethod: HTTPMethod;
  BooksQuery: ResolverTypeWrapper<BooksQuery>;
  Populated_Places_Response: ResolverTypeWrapper<Populated_Places_Response>;
  Error: ResolverTypeWrapper<Error>;
  ErrorCode: ErrorCode;
  Link: ResolverTypeWrapper<Link>;
  Metadata: ResolverTypeWrapper<Metadata>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']['output']>;
  PopulatedPlaceSummary: ResolverTypeWrapper<PopulatedPlaceSummary>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  PopulatedPlaceType: PopulatedPlaceType;
  Populated_Place_Response: ResolverTypeWrapper<Populated_Place_Response>;
  Populated_Place_Details: ResolverTypeWrapper<Populated_Place_Details>;
  Date_Time_Response: ResolverTypeWrapper<Date_Time_Response>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Distance_Response: ResolverTypeWrapper<Distance_Response>;
  Time_Response: ResolverTypeWrapper<Time_Response>;
  Countries_Response: ResolverTypeWrapper<Countries_Response>;
  Country_Summary: ResolverTypeWrapper<Country_Summary>;
  Country_Response: ResolverTypeWrapper<Country_Response>;
  Country_Details: ResolverTypeWrapper<Country_Details>;
  Country_Regions_Response: ResolverTypeWrapper<Country_Regions_Response>;
  Country_Region_Summary: ResolverTypeWrapper<Country_Region_Summary>;
  Country_Region_Response: ResolverTypeWrapper<Country_Region_Response>;
  Country_Region_Details: ResolverTypeWrapper<Country_Region_Details>;
  Currencies_Response: ResolverTypeWrapper<Currencies_Response>;
  Currency: ResolverTypeWrapper<Currency>;
  Languages_Response: ResolverTypeWrapper<Languages_Response>;
  Language: ResolverTypeWrapper<Language>;
  query_getLanguagesUsingGET_allOf_1_data_items_code: query_getLanguagesUsingGET_allOf_1_data_items_code;
  Locales_Response: ResolverTypeWrapper<Locales_Response>;
  Locale: ResolverTypeWrapper<Locale>;
  Time_Zones_Response: ResolverTypeWrapper<Time_Zones_Response>;
  Time_Zone: ResolverTypeWrapper<Time_Zone>;
  Time_Zone_Response: ResolverTypeWrapper<Time_Zone_Response>;
  CitiesQuery: ResolverTypeWrapper<CitiesQuery>;
  ResolveToSourceArgs: ResolverTypeWrapper<Scalars['ResolveToSourceArgs']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Book: Book;
  String: Scalars['String']['output'];
  Category: Category;
  Boolean: Scalars['Boolean']['output'];
  ObjMap: Scalars['ObjMap']['output'];
  BooksQuery: BooksQuery;
  Populated_Places_Response: Populated_Places_Response;
  Error: Error;
  Link: Link;
  Metadata: Metadata;
  BigInt: Scalars['BigInt']['output'];
  PopulatedPlaceSummary: PopulatedPlaceSummary;
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  Populated_Place_Response: Populated_Place_Response;
  Populated_Place_Details: Populated_Place_Details;
  Date_Time_Response: Date_Time_Response;
  DateTime: Scalars['DateTime']['output'];
  Distance_Response: Distance_Response;
  Time_Response: Time_Response;
  Countries_Response: Countries_Response;
  Country_Summary: Country_Summary;
  Country_Response: Country_Response;
  Country_Details: Country_Details;
  Country_Regions_Response: Country_Regions_Response;
  Country_Region_Summary: Country_Region_Summary;
  Country_Region_Response: Country_Region_Response;
  Country_Region_Details: Country_Region_Details;
  Currencies_Response: Currencies_Response;
  Currency: Currency;
  Languages_Response: Languages_Response;
  Language: Language;
  Locales_Response: Locales_Response;
  Locale: Locale;
  Time_Zones_Response: Time_Zones_Response;
  Time_Zone: Time_Zone;
  Time_Zone_Response: Time_Zone_Response;
  CitiesQuery: CitiesQuery;
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

export type enumDirectiveArgs = {
  value?: Maybe<Scalars['String']['input']>;
};

export type enumDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = enumDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

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
  Cities?: Resolver<ResolversTypes['CitiesQuery'], ParentType, ContextType>;
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

export type Populated_Places_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Populated_Places_Response'] = ResolversParentTypes['Populated_Places_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['PopulatedPlaceSummary']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ErrorResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['ErrorCode']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LinkResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Link'] = ResolversParentTypes['Link']> = ResolversObject<{
  href?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rel?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MetadataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Metadata'] = ResolversParentTypes['Metadata']> = ResolversObject<{
  currentOffset?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  totalCount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export type PopulatedPlaceSummaryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PopulatedPlaceSummary'] = ResolversParentTypes['PopulatedPlaceSummary']> = ResolversObject<{
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  distance?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  population?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regionCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['PopulatedPlaceType']>, ParentType, ContextType>;
  wikiDataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Populated_Place_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Populated_Place_Response'] = ResolversParentTypes['Populated_Place_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['Populated_Place_Details']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Populated_Place_DetailsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Populated_Place_Details'] = ResolversParentTypes['Populated_Place_Details']> = ResolversObject<{
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deleted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  elevationMeters?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  latitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  longitude?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  population?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regionCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timezone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['PopulatedPlaceType']>, ParentType, ContextType>;
  wikiDataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Date_Time_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Date_Time_Response'] = ResolversParentTypes['Date_Time_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type Distance_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Distance_Response'] = ResolversParentTypes['Distance_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Time_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Time_Response'] = ResolversParentTypes['Time_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Countries_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Countries_Response'] = ResolversParentTypes['Countries_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Country_Summary']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Country_SummaryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Country_Summary'] = ResolversParentTypes['Country_Summary']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currencyCodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wikiDataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Country_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Country_Response'] = ResolversParentTypes['Country_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['Country_Details']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Country_DetailsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Country_Details'] = ResolversParentTypes['Country_Details']> = ResolversObject<{
  callingCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  currencyCodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  flagImageUri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numRegions?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wikiDataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Country_Regions_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Country_Regions_Response'] = ResolversParentTypes['Country_Regions_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Country_Region_Summary']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Country_Region_SummaryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Country_Region_Summary'] = ResolversParentTypes['Country_Region_Summary']> = ResolversObject<{
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fipsCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isoCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wikiDataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Country_Region_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Country_Region_Response'] = ResolversParentTypes['Country_Region_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['Country_Region_Details']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Country_Region_DetailsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Country_Region_Details'] = ResolversParentTypes['Country_Region_Details']> = ResolversObject<{
  capital?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fipsCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isoCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  numCities?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  wikiDataId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Currencies_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Currencies_Response'] = ResolversParentTypes['Currencies_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Currency']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CurrencyResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Currency'] = ResolversParentTypes['Currency']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryCodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Languages_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Languages_Response'] = ResolversParentTypes['Languages_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Language']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LanguageResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Language'] = ResolversParentTypes['Language']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['query_getLanguagesUsingGET_allOf_1_data_items_code']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Locales_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Locales_Response'] = ResolversParentTypes['Locales_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Locale']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type LocaleResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Locale'] = ResolversParentTypes['Locale']> = ResolversObject<{
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Time_Zones_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Time_Zones_Response'] = ResolversParentTypes['Time_Zones_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  links?: Resolver<Maybe<Array<Maybe<ResolversTypes['Link']>>>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Metadata']>, ParentType, ContextType>;
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Time_Zone']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Time_ZoneResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Time_Zone'] = ResolversParentTypes['Time_Zone']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rawUtcOffsetHours?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Time_Zone_ResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Time_Zone_Response'] = ResolversParentTypes['Time_Zone_Response']> = ResolversObject<{
  errors?: Resolver<Maybe<Array<Maybe<ResolversTypes['Error']>>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rawUtcOffsetHours?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CitiesQueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CitiesQuery'] = ResolversParentTypes['CitiesQuery']> = ResolversObject<{
  findAdminDivisions?: Resolver<Maybe<ResolversTypes['Populated_Places_Response']>, ParentType, ContextType, RequireFields<CitiesQueryfindAdminDivisionsArgs, 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  getAdminDivision?: Resolver<Maybe<ResolversTypes['Populated_Place_Response']>, ParentType, ContextType, RequireFields<CitiesQuerygetAdminDivisionArgs, 'divisionId'>>;
  findCitiesNearAdminDivision?: Resolver<Maybe<ResolversTypes['Populated_Places_Response']>, ParentType, ContextType, RequireFields<CitiesQueryfindCitiesNearAdminDivisionArgs, 'divisionId' | 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  findDivisionsNearAdminDivision?: Resolver<Maybe<ResolversTypes['Populated_Places_Response']>, ParentType, ContextType, RequireFields<CitiesQueryfindDivisionsNearAdminDivisionArgs, 'divisionId' | 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  findCities?: Resolver<Maybe<ResolversTypes['Populated_Places_Response']>, ParentType, ContextType, RequireFields<CitiesQueryfindCitiesArgs, 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  getCity?: Resolver<Maybe<ResolversTypes['Populated_Place_Response']>, ParentType, ContextType, RequireFields<CitiesQuerygetCityArgs, 'cityId'>>;
  getCityDateTime?: Resolver<Maybe<ResolversTypes['Date_Time_Response']>, ParentType, ContextType, RequireFields<CitiesQuerygetCityDateTimeArgs, 'cityId'>>;
  getCityDistance?: Resolver<Maybe<ResolversTypes['Distance_Response']>, ParentType, ContextType, RequireFields<CitiesQuerygetCityDistanceArgs, 'cityId' | 'toCityId' | 'distanceUnit'>>;
  getCityLocatedIn?: Resolver<Maybe<ResolversTypes['Populated_Place_Response']>, ParentType, ContextType, RequireFields<CitiesQuerygetCityLocatedInArgs, 'cityId'>>;
  findCitiesNearCity?: Resolver<Maybe<ResolversTypes['Populated_Places_Response']>, ParentType, ContextType, RequireFields<CitiesQueryfindCitiesNearCityArgs, 'cityId' | 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  getCityTime?: Resolver<Maybe<ResolversTypes['Time_Response']>, ParentType, ContextType, RequireFields<CitiesQuerygetCityTimeArgs, 'cityId'>>;
  getCountries?: Resolver<Maybe<ResolversTypes['Countries_Response']>, ParentType, ContextType, RequireFields<CitiesQuerygetCountriesArgs, 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit'>>;
  getCountry?: Resolver<Maybe<ResolversTypes['Country_Response']>, ParentType, ContextType, RequireFields<CitiesQuerygetCountryArgs, 'countryId'>>;
  getRegions?: Resolver<Maybe<ResolversTypes['Country_Regions_Response']>, ParentType, ContextType, RequireFields<CitiesQuerygetRegionsArgs, 'countryId' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit'>>;
  getRegion?: Resolver<Maybe<ResolversTypes['Country_Region_Response']>, ParentType, ContextType, RequireFields<CitiesQuerygetRegionArgs, 'countryId' | 'regionCode'>>;
  findRegionDivisions?: Resolver<Maybe<ResolversTypes['Populated_Places_Response']>, ParentType, ContextType, RequireFields<CitiesQueryfindRegionDivisionsArgs, 'countryId' | 'regionCode' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  findRegionCities?: Resolver<Maybe<ResolversTypes['Populated_Places_Response']>, ParentType, ContextType, RequireFields<CitiesQueryfindRegionCitiesArgs, 'countryId' | 'regionCode' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  findCitiesNearLocation?: Resolver<Maybe<ResolversTypes['Populated_Places_Response']>, ParentType, ContextType, RequireFields<CitiesQueryfindCitiesNearLocationArgs, 'locationId' | 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  findDivisionsNearLocation?: Resolver<Maybe<ResolversTypes['Populated_Places_Response']>, ParentType, ContextType, RequireFields<CitiesQueryfindDivisionsNearLocationArgs, 'locationId' | 'distanceUnit' | 'namePrefixDefaultLangResults' | 'hateoasMode' | 'limit' | 'includeDeleted'>>;
  getCurrencies?: Resolver<Maybe<ResolversTypes['Currencies_Response']>, ParentType, ContextType, RequireFields<CitiesQuerygetCurrenciesArgs, 'countryId' | 'hateoasMode' | 'limit'>>;
  getLanguages?: Resolver<Maybe<ResolversTypes['Languages_Response']>, ParentType, ContextType, RequireFields<CitiesQuerygetLanguagesArgs, 'hateoasMode' | 'limit'>>;
  getLocales?: Resolver<Maybe<ResolversTypes['Locales_Response']>, ParentType, ContextType, RequireFields<CitiesQuerygetLocalesArgs, 'hateoasMode' | 'limit'>>;
  getTimezones?: Resolver<Maybe<ResolversTypes['Time_Zones_Response']>, ParentType, ContextType, RequireFields<CitiesQuerygetTimezonesArgs, 'hateoasMode' | 'limit'>>;
  getTimeZone?: Resolver<Maybe<ResolversTypes['Time_Zone_Response']>, ParentType, ContextType, RequireFields<CitiesQuerygetTimeZoneArgs, 'zoneId'>>;
  getTimeZoneDateTime?: Resolver<Maybe<ResolversTypes['Date_Time_Response']>, ParentType, ContextType, RequireFields<CitiesQuerygetTimeZoneDateTimeArgs, 'zoneId'>>;
  getTimeZoneTime?: Resolver<Maybe<ResolversTypes['Time_Response']>, ParentType, ContextType, RequireFields<CitiesQuerygetTimeZoneTimeArgs, 'zoneId'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface ResolveToSourceArgsScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['ResolveToSourceArgs'], any> {
  name: 'ResolveToSourceArgs';
}

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Book?: BookResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  ObjMap?: GraphQLScalarType;
  BooksQuery?: BooksQueryResolvers<ContextType>;
  Populated_Places_Response?: Populated_Places_ResponseResolvers<ContextType>;
  Error?: ErrorResolvers<ContextType>;
  Link?: LinkResolvers<ContextType>;
  Metadata?: MetadataResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  PopulatedPlaceSummary?: PopulatedPlaceSummaryResolvers<ContextType>;
  Populated_Place_Response?: Populated_Place_ResponseResolvers<ContextType>;
  Populated_Place_Details?: Populated_Place_DetailsResolvers<ContextType>;
  Date_Time_Response?: Date_Time_ResponseResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Distance_Response?: Distance_ResponseResolvers<ContextType>;
  Time_Response?: Time_ResponseResolvers<ContextType>;
  Countries_Response?: Countries_ResponseResolvers<ContextType>;
  Country_Summary?: Country_SummaryResolvers<ContextType>;
  Country_Response?: Country_ResponseResolvers<ContextType>;
  Country_Details?: Country_DetailsResolvers<ContextType>;
  Country_Regions_Response?: Country_Regions_ResponseResolvers<ContextType>;
  Country_Region_Summary?: Country_Region_SummaryResolvers<ContextType>;
  Country_Region_Response?: Country_Region_ResponseResolvers<ContextType>;
  Country_Region_Details?: Country_Region_DetailsResolvers<ContextType>;
  Currencies_Response?: Currencies_ResponseResolvers<ContextType>;
  Currency?: CurrencyResolvers<ContextType>;
  Languages_Response?: Languages_ResponseResolvers<ContextType>;
  Language?: LanguageResolvers<ContextType>;
  Locales_Response?: Locales_ResponseResolvers<ContextType>;
  Locale?: LocaleResolvers<ContextType>;
  Time_Zones_Response?: Time_Zones_ResponseResolvers<ContextType>;
  Time_Zone?: Time_ZoneResolvers<ContextType>;
  Time_Zone_Response?: Time_Zone_ResponseResolvers<ContextType>;
  CitiesQuery?: CitiesQueryResolvers<ContextType>;
  ResolveToSourceArgs?: GraphQLScalarType;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  globalOptions?: globalOptionsDirectiveResolver<any, any, ContextType>;
  httpOperation?: httpOperationDirectiveResolver<any, any, ContextType>;
  enum?: enumDirectiveResolver<any, any, ContextType>;
  resolveTo?: resolveToDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = BooksTypes.Context & CitiesTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".mesh/sources/Books/schemaWithAnnotations":
      return Promise.resolve(importedModule$0) as T;
    
    case ".mesh/sources/Cities/schemaWithAnnotations":
      return Promise.resolve(importedModule$1) as T;
    
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
const citiesTransforms = [];
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
const citiesHandler = new OpenapiHandler({
              name: "Cities",
              config: {"source":"./services/cities-service/cities-definition.json","ignoreErrorResponses":true,"operationHeaders":{"X-RapidAPI-Key":"f93d3b393dmsh13fea7cb6981b2ep1dba0ajsn654ffeb48c26"}},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("Cities"),
              logger: logger.child("Cities"),
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
                  config: {"renames":[{"from":{"type":"Query","field":"AppController_(.*)"},"to":{"type":"Query","field":"$1"},"useRegExpForFields":true}]},
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
citiesTransforms[0] = new RenameTransform({
                  apiName: "Cities",
                  config: {"renames":[{"from":{"type":"Query","field":"(.*)UsingGET"},"to":{"type":"Query","field":"$1"},"useRegExpForFields":true}]},
                  baseDir,
                  cache,
                  pubsub,
                  importFn,
                  logger,
                });
citiesTransforms[1] = new EncapsulateTransform({
                  apiName: "Cities",
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
sources[1] = {
          name: 'Cities',
          handler: citiesHandler,
          transforms: citiesTransforms
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