import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RecordType } from "vars/types/record.type";
import { RootState } from "store/store";
import { recordApi } from "./record.api";

interface RecordState {
  records: RecordType[];
  selectedRecord: RecordType | null;
}

const initialRecordState: RecordState = {
  records: [],
  selectedRecord: null,
};

export const recordSlice = createSlice({
  name: "record",
  initialState: initialRecordState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        recordApi.endpoints.getAllRecords.matchFulfilled,
        (state, { payload }: PayloadAction<RecordType[]>) => {
          state.records = payload;
        }
      )
      .addMatcher(
        recordApi.endpoints.getSingleRecords.matchFulfilled,
        (state, { payload }: PayloadAction<RecordType>) => {
          state.selectedRecord = payload;
        }
      );
  },
});

export const selectRecordData = (state: RootState) => state.record;
