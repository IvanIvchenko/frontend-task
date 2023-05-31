export interface NumbersResponseType {
  data: string[];
}

export interface NumbersRequestType {
  length: string;
  size: string;
  type: "uint8" | "uint16" | "hex8" | "hex16";
}

export interface NumbersErrRes {
  data?: {
    Error?: string;
    error?: string;
  };
}

export interface NumbersStatus {
  isError?: boolean;
  isSuccess?: boolean;
  isLoading?: boolean;
  error?: NumbersErrRes;
}

export interface NumbersStatusData extends NumbersStatus {
  errorMessage?: string;
}

export interface NumbersHelper {
  getNumbersData: (params: NumbersRequestType) => void;
  getNumbersStatus: NumbersStatus;
  data: string[];
}