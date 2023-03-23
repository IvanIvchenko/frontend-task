import { Slider, Form } from 'antd';
import { CustomContainer } from 'components/theme/CustomContainer/CustomContainer';
import styled from 'styled-components/macro';
import { getColor } from 'utils/helpers/styleHelpers';

export const SFiltersWrapper = styled(CustomContainer)`
  max-width: 230px;
  width: 100%;
`;

export const SSeparatorLine = styled.div`
  width: 100%;
  height: 1px;
  border: 1px solid ${getColor('grey300')};
  margin-bottom: 15px;
`;

export const SBrandsWrapper = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SSlider = styled(Slider)`
  width: 85%;
  margin-left: 10px;
  margin-bottom: 20px;
`;

export const SFormItem = styled(Form.Item)`
  margin-bottom: 0;
`;