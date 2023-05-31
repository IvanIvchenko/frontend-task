import React, { FC, useEffect, useState } from "react";
import { CustomContainer } from "components/theme/CustomContainer/CustomContainer";
import { NumbersForm } from "components/general/NumbersForm/NumbersForm";
import { CustomText } from "components/theme/CustomText/CustomText";
import { useNumbers } from "utils/hooks/useNumbers";
import { NumbersRequestType } from "vars/types/numbers.type";
import { Spin } from "antd";

export const MainPage: FC = () => {
  const [numbers, setNumbers] = useState<string[]>([]);
  const { getNumbersData, getNumbersStatus, data } = useNumbers();
  useEffect(() => {
    if (getNumbersStatus.isSuccess) {
      setNumbers(data);
    }
  }, [getNumbersStatus]);

  const handleFormCompletion = (fields: NumbersRequestType) => {
    getNumbersData(fields);
  };

  return (
    <CustomContainer
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      width="100%"
    >
      <NumbersForm onComplete={handleFormCompletion} />
      {getNumbersStatus.isSuccess && (
        <CustomText marginTop={15} textAlign="center">{`[${numbers.join(
          ", "
        )}]`}</CustomText>
      )}
      {getNumbersStatus.isLoading && <Spin />}
    </CustomContainer>
  );
};
