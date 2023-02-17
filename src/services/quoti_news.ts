// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { News } from "../model/types";
import buildConfig from "../util/constant";
import { Category, CountryCode, LanguageCode, SearchIn, SortBy } from "./types";

interface GET_EVERYTHING_PARAMS {
  q?: string;
  searchIn?: SearchIn;
  sources?: string;
  domain?: string;
  excludeDomains?: string;
  from: Date;
  to: Date;
  language: LanguageCode;
  sortBy: SortBy;
  pageSize: number;
  page: number;
}

interface GET_TOP_HEADLINES_PARAMS {
  q?: string;
  pageSize: number;
  page: number;
  category?: Category;
  language: LanguageCode;
  country: CountryCode;
}

interface GET_TOP_HEADLINES_SOURCES_PARAMS {
  category: Category;
  language: LanguageCode;
  country: CountryCode;
}

// Define a service using a base URL and expected endpoints
export const quotiNewsApi = createApi({
  reducerPath: "quotiNewsApi",
  baseQuery: fetchBaseQuery({
    mode: "cors",
    credentials: "same-origin",
    baseUrl: "http://localhost:3001/v2",
    prepareHeaders: (headers, { getState }) => {
      // headers.set('X-Api-Key',buildConfig.API_KEY)
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getNewsByQuery: builder.query<News, string>({
      query: (name) => `everything?q=${name}`,
    }),
    getEverything: builder.query<News, GET_EVERYTHING_PARAMS>({
      query: ({ q, sortBy, page, pageSize, language }) =>
        `everything?q=${q}&page=${page}&pageSize=${pageSize}&sortBy=${sortBy}&q=${q}`,
    }),
    getTopHeadlines: builder.query<News, GET_TOP_HEADLINES_PARAMS>({
      query: ({ category, page, pageSize, country, language }) =>
        `top-headlines?category=${category}&page=${page}&pageSize=${pageSize}&country=${country}&language=${language}`,
    }),
    getTopHeadlinesSources: builder.query<
      News,
      GET_TOP_HEADLINES_SOURCES_PARAMS
    >({
      query: ({ category, language, country }) =>
        `/top-headlines/sources?category=${category}&language=${language}&country=${country}`,
    }),
    getNewsByCategory: builder.query<News, string>({
      query: (name) => `everything?category=${name}`,
    }),
    getNewsByCountry: builder.query<News, string>({
      query: (name) => `everything?country=${name}`,
    }),
    getNewsByCountryAndCategory: builder.query<
      News,
      { country: string; category: string }
    >({
      query: (name) =>
        `everything?category=${name.category}country=${name.country}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetNewsByQueryQuery,
  useGetNewsByCategoryQuery,
  useGetEverythingQuery,
  useGetTopHeadlinesQuery,
  useGetTopHeadlinesSourcesQuery,
} = quotiNewsApi;
