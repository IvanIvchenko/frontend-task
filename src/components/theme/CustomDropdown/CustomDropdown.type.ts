import { SelectProps } from "antd";

export interface IDropdownProps extends SelectProps<any, any> {
  dropdownOptions: string[];
  isSearchable?: boolean;
  name?: string;
}
