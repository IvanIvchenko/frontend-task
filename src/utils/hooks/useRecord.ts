import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  useCreateRecordMutation,
  useDeleteRecordMutation,
  useGetAllRecordsMutation,
  useGetSingleRecordsMutation,
  useUpdateRecordMutation,
} from "store/record/record.api";
import { selectRecordData } from "store/record/record.slice";
import {
  RecordHelper,
  RecordStatus,
  RecordStatusData,
  RecordType,
} from "vars/types/record.type";

const getResultData = (mutationResult: RecordStatus) => {
  const { isSuccess, isError, isLoading, error } = mutationResult;
  const resultData: RecordStatusData = {
    isSuccess,
    isLoading,
    isError,
  };

  const errorData = error?.data;

  if (errorData?.error) {
    resultData.errorMessage = errorData?.error;
  }

  if (errorData?.Error) {
    resultData.errorMessage = errorData?.Error;
  }

  return resultData;
};

export const useRecord = () => {
  const getAllRecords = useGetAllRecordsMutation();
  const getSingleRecord = useGetSingleRecordsMutation();
  const deleteRecord = useDeleteRecordMutation();
  const updateRecord = useUpdateRecordMutation();
  const createRecord = useCreateRecordMutation();
  const recordsData = useSelector(selectRecordData);

  return useMemo(() => {
    const [getAllRecordsData, getAllRecordsStatus] = getAllRecords;
    const [getSingleRecordData, getSingleRecordStatus] = getSingleRecord;
    const [deleteSingleRecordData, deleteSingleRecordStatus] = deleteRecord;
    const [updateRecordData, updateRecordStatus] = updateRecord;
    const [createRecordData, createRecordStatus] = createRecord;

    const helper: RecordHelper = {
      getAllRecordsData: () => {
        getAllRecordsData({});
      },
      getSingleRecordData: (id: string) => {
        getSingleRecordData({ _id: id });
      },
      deleteSingleRecordData: (id: string) => {
        deleteSingleRecordData({ _id: id });
      },
      updateRecordData: (record: RecordType) => {
        updateRecordData(record);
      },
      createRecordData: (record: Omit<RecordType, "_id">) => {
        createRecordData(record);
      },

      getAllRecordsStatus: getResultData(getAllRecordsStatus as RecordStatus),
      getSingleRecordStatus: getResultData(
        getSingleRecordStatus as RecordStatus
      ),
      deleteSingleRecordStatus: getResultData(
        deleteSingleRecordStatus as RecordStatus
      ),
      updateRecordStatus: getResultData(updateRecordStatus as RecordStatus),
      createRecordStatus: getResultData(createRecordStatus as RecordStatus),

      records: recordsData.records,
      selectedRecord: recordsData.selectedRecord,
    };

    return helper;
  }, [
    getAllRecords,
    getSingleRecord,
    deleteRecord,
    updateRecord,
    createRecord,
    recordsData,
  ]);
};
