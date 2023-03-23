import styled from "styled-components/macro";
import { getColor } from "utils/helpers/styleHelpers";

export const SBreadCrumbWrapper = styled.div`
  .ant-breadcrumb a {
    background: transparent;
    color: ${getColor("grey500")};
  }
`;
