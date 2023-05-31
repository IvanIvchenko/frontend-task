import { NumbersRequestType } from 'vars/types/numbers.type';

export interface NumberFormInputProps {
  onComplete: (fields: NumbersRequestType) => void;
}