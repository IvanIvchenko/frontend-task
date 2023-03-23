import React from 'react';
import { SCustomInput, SINputContainer } from './CustomNumberInput.styles';
import { ICustomNumberInputProps } from './CustomNumberInput.types';

export const CustomNumberInput: React.FC<ICustomNumberInputProps> = ({
  inputTheme = 'default',
  bgColor,
  className = '',
  bordered = false,
  marginBottom = 0,
  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
  height = 40,
  controls = false,
  ...props
}) => (
  <SINputContainer>
    <SCustomInput
      className={className}
      bgColor={bgColor}
      inputTheme={inputTheme}
      bordered={bordered}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
      height={height}
      controls={controls}
      {...props}
    />
  </SINputContainer>
);
