import React from "react";
import { StyledSelect } from "./CustomDropdown.styles";
import { IDropdownProps } from "./CustomDropdown.type";

export const CustomDropdown: React.FC<IDropdownProps> = ({
  dropdownOptions,
  isSearchable = false,
  ...props
}) => (
  <StyledSelect
    showSearch={isSearchable}
    placeholder={isSearchable ? "Select or Type to Search" : ""}
    optionFilterProp="children"
    filterOption={(inputValue, option) =>
      (option?.props.label.toLowerCase() ?? "").includes(inputValue.toLowerCase())
    }
    options={dropdownOptions.map((option) => ({
      value: option,
      label: option,
    }))}
    {...props}
  />
);
