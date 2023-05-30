import styled, { css } from 'styled-components';

import { getAliasColorValue, getBackgroundColor } from '../../tokens/colors';
import { BasicButton } from '../Basic';

export const hoverStyle = css`
  ${getBackgroundColor('success-200')};
`;

export const focusStyle = css`
  outline: 2px solid ${getAliasColorValue('success-200') }
  ${getBackgroundColor('success-200')};
`;

export const disabledStyle = css`
  ${getBackgroundColor('success-300')};
  color: #fff;
`;

export const defaultStyle = css`
  ${getBackgroundColor('success-100')};
  color: #fff;
`;

export const SuccessButton = styled(BasicButton)`
  ${defaultStyle}

  &:hover:not(:disabled, :active) {
    ${hoverStyle}
  }
  &:focus-visible {
    ${focusStyle}
  }
  &:disabled {
    color: #000;
    ${disabledStyle}
  }
`;
