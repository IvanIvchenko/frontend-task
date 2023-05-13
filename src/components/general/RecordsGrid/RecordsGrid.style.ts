import { Col, Row } from 'antd';
import styled from 'styled-components/macro';

export const SRow = styled(Row).attrs(() => ({
  gutter: [16, 24],
}))`
  margin: 0 0 15px 0;
`;

export const SCol = styled(Col).attrs(() => ({
  className: "gutter-row",
  flex: "0 0 0",
}))``;

