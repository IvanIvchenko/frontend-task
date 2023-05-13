import { CustomContainer } from "components/theme/CustomContainer/CustomContainer";
import styled from "styled-components/macro";
import { getColor } from "utils/helpers/styleHelpers";

export const SFiltersWrapper = styled(CustomContainer)`
  position: relative;
  width: 290px;
`;

export const SSeparatorLine = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid ${getColor("grey300")};
  margin-bottom: 15px;
`;
