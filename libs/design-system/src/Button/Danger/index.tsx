import styled, { css } from 'styled-components';

import { getAliasColorValue, getBackgroundColor } from '../../tokens/colors';
import { BasicButton } from '../Basic';

export const hoverStyle = css`
  ${getBackgroundColor('danger-200')};
`;

export const focusStyle = css`
  outline: 2px solid ${getAliasColorValue('primary-200') }
  ${getBackgroundColor('danger-200')};
`;

export const disabledStyle = css`
  ${getBackgroundColor('danger-300')};
  color: #fff;
`;

export const defaultStyle = css`
  ${getBackgroundColor('danger-100')};
  color: #fff;
`;

export const DangerButton = styled(BasicButton)`
  ${defaultStyle}

  &:hover:not(:disabled, :active) {
    ${hoverStyle}
  }
  &:focus-visible {
    ${focusStyle}
  }
  &:disabled {
    ${disabledStyle}
    color: #000;
  }
`;
