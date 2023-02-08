// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { News } from "../model/types";
import buildConfig from "../util/constant";

enum SortBy { "relevancy", "popularity", "publishedAt" };
enum Language { "ar","de","en","es","fr","he","it","nl","no","pt","ru","sv","ud","zh"}
enum SearchIn { "title", "description", "content"}

// Define a service using a base URL and expected endpoints
export const quotiNewsApi = createApi({
  reducerPath: "quotiNewsApi",
  baseQuery: fetchBaseQuery({
    mode: "cors",
    credentials: "same-origin",
    baseUrl: "https://newsapi.org/v2",
    prepareHeaders: (headers, { getState }) => {
      headers.set('Access-Control-Allow-Origin', '*')
      // headers.set('X-Api-Key',buildConfig.API_KEY)
      headers.set('X-Api-Key',"883fcfd667104a34ac74c1827fb419e4")
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getNewsByQuery: builder.query<News, string>({
      query: (name) => `everything?q=${name}&apiKey=883fcfd667104a34ac74c1827fb419e4`,
    }),
    getNewsByCategory: builder.query<News, string>({
      query: (name) => `everything?category=${name}`,
    }),
    getNewsByCountry: builder.query<News, string>({
      query: (name) => `everything?country=${name}`,
    }),
    getNewsByCountryAndCategory: builder.query<News, {country: string, category: string}>({
      query: (name) => `everything?category=${name.category}country=${name.country}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetNewsByQueryQuery, useGetNewsByCategoryQuery } = quotiNewsApi;
