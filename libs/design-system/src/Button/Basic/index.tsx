import styled from 'styled-components';
import { ButtonSize } from '../types';

const heightMap: Record<ButtonSize, string> = {
  small: '32px',
  medium: '40px',
  large: '48px',
};
const fontSizeMap: Record<ButtonSize, string> = {
  small: '1rem',
  medium: '1.25rem',
  large: '1.5rem',
}

export const BasicButton = styled.button<{$size: ButtonSize}>`
  padding-inline: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  color: #000;
  gap: 8px;

  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }
  &:hover:not(:disabled) {
    cursor: pointer;
  }

  height: ${({$size}) => heightMap[$size]};
  font-size: ${({$size}) => fontSizeMap[$size]}
`;
