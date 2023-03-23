import { CustomContainer } from "components/theme/CustomContainer/CustomContainer";
import { CustomText } from "components/theme/CustomText/CustomText";
import styled from "styled-components/macro";
import { getColor } from "utils/helpers/styleHelpers";

export const SImage = styled.img`
  height: 345px;
  width: 345px;
`;

export const SInfoWrapper = styled(CustomContainer)`
  min-width: 430px;
`;

export const SCustomText = styled(CustomText)`
  position: absolute;
  left: 35%;
`;

export const SSeparatorLine = styled.div`
  width: 100%;
  height: 0px;
  border: 1px solid ${getColor("grey300")};
  margin-bottom: 15px;
`;
