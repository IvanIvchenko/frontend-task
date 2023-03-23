import styled from 'styled-components/macro';
import { Checkbox } from 'antd';
import { getColor } from 'utils/helpers/styleHelpers';
import { ISCheckboxProps } from './CustomCheckbox.type';

export const SCustomCheckbox = styled(Checkbox) <ISCheckboxProps>`
  align-items: center;
  margin-inline-start: 0 !important;
  margin-bottom: 15px;

  &.multiple {
    .ant-checkbox {
      top: 12px;
    }
  }

  &.beige {
    .ant-checkbox {
      &-checked {
        .ant-checkbox-inner {
          border-color: ${getColor('blue')};
        }
      }

      & + span {
        padding-right: 6px;
        padding-left: 16px;
      }

      span {
        color: ${getColor('blue')};
        top: 20px;
      }

      &-wrapper {
        background: ${getColor('grey100')};
        display: flex;
        aling-items: center;

        :hover {
          border-color: ${getColor('blue')};
        }
      }

      &-inner {
        width: 20px;
        height: 20px;
        border: 2px solid ${getColor('grey300')};
        background: ${getColor('grey100')};
        border-radius: 5px;
        top: 0px;
        border-color: ${getColor('grey300')};

        &:after {
          left: 25%;
          top: 45%;
        }
      }
    }

    .ant-typography {
      color: ${getColor('grey100')};
      bottom: -2px;
    }
  }

  .ant-checkbox {
    span {
      color: ${getColor('blue')};
    }

    &-wrapper {
      background: ${getColor('grey100')};
      border-color: ${({ borderColor }) => getColor(borderColor)};
      display: flex;
      aling-items: center;

      :hover {
        border-color: ${({ borderColor }) => getColor(borderColor)};
      }
    }

    &-inner {
      width: 20px;
      height: 20px;
      border: 2px solid ${({ borderColor }) => getColor(borderColor)};
      border-radius: 5px;
      background-color: transparent;

      &:after {
        left: 25%;
        top: 45%;
      }
    }
  }

  .ant-checkbox-checked {
    &:after {
      border: none;
    }

    .ant-checkbox-inner {
      border-color: ${getColor('blue')};
      background: ${getColor('blue')};
    }
  }
`;
