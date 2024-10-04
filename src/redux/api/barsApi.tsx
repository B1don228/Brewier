import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBrewie } from "../../utils/types/requestTypes";

export const barsApi = createApi({
  reducerPath: "barsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.REACT_APP_BREWIE }),
  endpoints: (builder) => ({
    getAllBrewiesMap: builder.query<IBrewie[], void>({
      query: () => `/breweries?per_page=200`,
    }),
    getBrewiesList: builder.query<IBrewie[], number>({
      query: (page) => `/breweries?page=${page}`,
    }),
    getBrewierInfo: builder.query<[IBrewie] | [], string | undefined>({
      query: (id) => `/breweries?by_ids=${id}`,
    }),
  }),
});

export const {
  useGetAllBrewiesMapQuery,
  useGetBrewiesListQuery,
  useGetBrewierInfoQuery,
} = barsApi;
