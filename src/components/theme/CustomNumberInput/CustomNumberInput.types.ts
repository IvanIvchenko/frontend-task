import { InputNumberProps } from 'antd';

export interface ICustomNumberInputProps extends InputNumberProps {
  bgColor?: 'white' | 'grey300' | 'grey100';
  inputTheme?: 'default' | string;
  className?: string;
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number; 
  marginRight?: number;
  height?: number;
}
