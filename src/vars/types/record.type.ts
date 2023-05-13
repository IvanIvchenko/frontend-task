export interface RecordType {
  _id: string;
  name: string;
  status: string;
  role: string;
  address: string;
  amount: string;
}

export interface RecordErrorRes {
  data?: {
    Error?: string;
    error?: string;
  };
}

export interface RecordStatus {
  isError?: boolean;
  isSuccess?: boolean;
  isLoading?: boolean;
  error?: RecordErrorRes;
}

export interface RecordStatusData extends RecordStatus {
  errorMessage?: string;
}

export interface RecordHelper {
  getAllRecordsData: () => void;
  getSingleRecordData: (id: string) => void;
  deleteSingleRecordData: (id: string) => void;
  updateRecordData: (record: RecordType) => void;
  createRecordData: (record: Omit<RecordType, "_id">) => void;
  getAllRecordsStatus: RecordStatus;
  getSingleRecordStatus: RecordStatus;
  deleteSingleRecordStatus: RecordStatus;
  updateRecordStatus: RecordStatus;
  createRecordStatus: RecordStatus;
  records: RecordType[];
  selectedRecord: RecordType | null;
}