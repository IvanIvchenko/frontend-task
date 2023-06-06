import { ButtonProps } from 'antd/lib/button/button';
import { TThemeColor } from 'styles/theme';

export type TByttonType = "default" | "primary" | "ghost" | "dashed" | "link" | "text";
export type TButtonSizeProp = 'small' | 'middle' | 'average' | 'large';

export interface ICustomButtonProps extends ButtonProps {
  marginBottom?: number;
  marginTop?: number;
  marginRight?: number;
  marginLeft?: number;
  uppercase?: boolean;
  capitalize?: boolean;
  page?: string;
  fluid?: boolean;
  bgColor?: TThemeColor;
  textColor?: TThemeColor;
  borderColor?: TThemeColor;
  disabledBgColor?: TThemeColor;
  disabledTextColor?: TThemeColor;
  disabledBorderColor?: TThemeColor;
  buttonSize?: TButtonSizeProp;
  cursorPointer?: boolean;
  type?: TByttonType;
  className?: string;
}
