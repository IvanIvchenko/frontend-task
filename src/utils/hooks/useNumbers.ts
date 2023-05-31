import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useGetNumbersMutation } from "store/numbers/numbers.api";
import { selectNumbersData } from "store/numbers/numbers.slice";
import {
  NumbersHelper,
  NumbersRequestType,
  NumbersStatus,
  NumbersStatusData,
} from "vars/types/numbers.type";

const getResultData = (mutationResult: NumbersStatus) => {
  const { isSuccess, isError, isLoading, error } = mutationResult;
  const resultData: NumbersStatusData = {
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

export const useNumbers = () => {
  const getNumbers = useGetNumbersMutation();
  const numbersData = useSelector(selectNumbersData);

  return useMemo(() => {
    const [getNumbersData, getNumbersStatus] = getNumbers;

    const helper: NumbersHelper = {
      getNumbersData: (params: NumbersRequestType) => {
        getNumbersData(params);
      },

      getNumbersStatus: getResultData(getNumbersStatus as NumbersStatus),

      data: numbersData.data,
    };

    return helper;
  }, [getNumbers, numbersData]);
};
