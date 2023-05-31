import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {
  NumbersResponseType,
  NumbersRequestType,
} from "vars/types/numbers.type";

export const numbersApi = createApi({
  reducerPath: "numbersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_QRN_URL!,
    prepareHeaders: (headers) => {
      headers.set("x-api-key", process.env.REACT_APP_QRN_KEY!);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getNumbers: builder.mutation<NumbersResponseType, NumbersRequestType>({
      query: ({ length, type, size }) => ({
        url: `/?length=${length}&type=${type}&size=${size}`,
      }),
    }),
  }),
});

export const { useGetNumbersMutation } = numbersApi;
