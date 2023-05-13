import React, { useState } from "react";
import { CustomButton } from "components/theme/CustomButton/CustomButton";
import { CustomContainer } from "components/theme/CustomContainer/CustomContainer";
import { CustomText } from "components/theme/CustomText/CustomText";
import { CustomInput } from "components/theme/CustomInput/CustomInput";
import { CustomDropdown } from "components/theme/CustomDropdown/CustomDropdown";
import { ROLES, STATUSES } from "vars/consts/record";
import { SFiltersWrapper, SSeparatorLine } from "./Filters.styles";
import { FiltersProps } from "./Filters.types";

export const Filters: React.FC<FiltersProps> = ({ onSubmit, onReset }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [role, setRole] = useState("");
  const handleOnSubmit = () => {
    onSubmit({ name, status, role });
  };

  const handleResetClick = () => {
    setName("");
    setStatus("");
    setRole("");
    onReset();
  };

  return (
    <SFiltersWrapper
      flexDirection="column"
      width="100%"
      justifyContent="center"
    >
      <SSeparatorLine />
      <CustomText marginBottom={25} fontWeight="strong">
        Name
      </CustomText>
      <CustomInput value={name} onChange={(e) => setName(e.target.value)} />
      <CustomText marginBottom={25} marginTop={25} fontWeight="strong">
        Status
      </CustomText>
      <CustomDropdown
        dropdownOptions={STATUSES}
        onChange={(value) => setStatus(value)}
        value={status}
      />
      <CustomText marginBottom={25} marginTop={25} fontWeight="strong">
        Role
      </CustomText>
      <CustomDropdown
        isSearchable
        dropdownOptions={ROLES}
        onChange={(value) => setRole(value)}
        value={role}
      />
      <CustomContainer
        width="100%"
        justifyContent="center"
        marginBottom={40}
        marginTop={25}
      >
        <CustomButton
          buttonSize="small"
          textColor="blue"
          onClick={handleOnSubmit}
        >
          Apply
        </CustomButton>
      </CustomContainer>
      <CustomText
        cursorPointer
        textColor="blue"
        onClick={handleResetClick}
        marginBottom={15}
      >
        Reset filter
      </CustomText>
      <SSeparatorLine />
    </SFiltersWrapper>
  );
};
