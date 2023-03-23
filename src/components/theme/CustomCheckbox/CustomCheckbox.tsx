import React from 'react';
import { CustomText } from '../CustomText/CustomText';
import { SCustomCheckbox } from './CustomCheckbox.styles';
import { ICustomCheckboxProps } from './CustomCheckbox.type';

export const CustomCheckbox: React.FC<ICustomCheckboxProps> = ({ children, borderColor = 'grey300', ...props }) => (
  <SCustomCheckbox borderColor={borderColor} {...props}>
    <CustomText>{children}</CustomText>
  </SCustomCheckbox>
);
