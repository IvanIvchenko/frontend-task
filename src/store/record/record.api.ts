import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { RecordType } from "vars/types/record.type";

export const recordApi = createApi({
  reducerPath: "recordApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_RECORDS_API,
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllRecords: builder.mutation<RecordType[], {}>({
      query: () => ({
        url: "/records",
      }),
    }),
    getSingleRecords: builder.mutation<RecordType, { _id: string }>({
      query: (credentials) => ({
        url: `/records/${credentials._id}`,
      }),
    }),
    createRecord: builder.mutation<RecordType, Omit<RecordType, "_id">>({
      query: (data) => ({
        url: "/records",
        method: "POST",
        body: data,
      }),
    }),
    updateRecord: builder.mutation<RecordType, RecordType>({
      query: (data) => ({
        url: `/records/${data._id}`,
        method: "PUT",
        body: Object.fromEntries(Object.entries(data).filter(e => e[0] !== '_id'))
      }),
    }),
    deleteRecord: builder.mutation<{}, { _id: string }>({
      query: (credentials) => ({
        url: `/records/${credentials._id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllRecordsMutation,
  useCreateRecordMutation,
  useDeleteRecordMutation,
  useGetSingleRecordsMutation,
  useUpdateRecordMutation,
} = recordApi;
