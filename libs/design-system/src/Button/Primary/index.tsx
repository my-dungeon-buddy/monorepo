import styled, { css } from 'styled-components';

import { getAliasColorValue, getBackgroundColor } from '../../tokens/colors';
import { BasicButton } from '../Basic';

export const hoverStyle = css`
  ${getBackgroundColor('primary-200')};
`;

export const focusStyle = css`
  outline: 2px solid ${getAliasColorValue('primary-200') }
  ${getBackgroundColor('primary-200')};
`;

export const disabledStyle = css`
  ${getBackgroundColor('primary-300')};
  color: #fff;
`;

export const defaultStyle = css`
  ${getBackgroundColor('primary-100')};
  color: #fff;
`;

export const PrimaryButton = styled(BasicButton)`
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
