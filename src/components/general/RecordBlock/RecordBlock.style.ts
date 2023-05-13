import { CustomContainer } from "components/theme/CustomContainer/CustomContainer";
import { CustomIcon } from "components/theme/CustomIcon/CustomIcon";
import { CustomText } from "components/theme/CustomText/CustomText";
import styled from "styled-components/macro";

export const SIconDelete = styled(CustomIcon).attrs(() => ({
  name: "delete",
  color: "blue",
  cursorPointer: true,
  size: "small",
}))`
  position: absolute;
  top: 5px;
  right: 10px;
`;

export const SIconEdit = styled(CustomIcon).attrs(() => ({
  name: "edit",
  color: "blue",
  cursorPointer: true,
  size: "small",
}))`
  position: absolute;
  top: 30px;
  right: 10px;
`;

export const SFieldsWrapper = styled(CustomContainer)`
  width: 200px;
`;

export const SCustomText = styled(CustomText)`
  position: absolute;
  left: 35%;
`;
