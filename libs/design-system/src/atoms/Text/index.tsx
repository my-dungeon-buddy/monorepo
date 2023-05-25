import React, { ForwardedRef, ReactElement, ReactNode } from 'react';
import styled, { css } from 'styled-components';

import { ColorAlias, getColor } from '../../tokens/colors';
import {
  getTextStyle,
  HeadingSize,
  TextModifier,
  TextSize,
  TextType,
} from '../../tokens/typography';

export type Size = HeadingSize | TextSize;

export type TextProps = {
  children: ReactNode;
  color?: ColorAlias;
  modifier?: TextModifier;
  onClick?: (evt: MouseEvent) => void;
  size?: Size;
  truncate?: boolean;
  type?: TextType;
}

const TextElement = styled.span<{
  color?: ColorAlias;
  modifier?: TextModifier;
  size: HeadingSize | TextSize;
  truncate?: boolean;
  type: TextType;
}>(({color, modifier, size, truncate, type}) => {
  const style = getTextStyle(type, size, modifier);
  const hasNoStyle = typeof style !== 'function';

  const colorStyle = color && getColor(color);
  const truncateStyle = truncate
    ? css`
      overflow-y: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `
    : '';
  if (hasNoStyle) {
    console.warn(
      `Typography alias ${type}-${size}${
        modifier ? `-${modifier}` : ''
      } does not exist`,
    );

    return '';
  }

  return css`
    margin: 0;

    ${style()}
    ${colorStyle}
    ${truncateStyle}
  `;
});

export const TextComponent = React.forwardRef(function (
  {
    color,
    modifier,
    onClick,
    size = 'base',
    truncate,
    type = 'text',
    ...props
  }: TextProps,
  ref: ForwardedRef<HTMLElement>,
): ReactElement {
  return (
    <TextElement
      color={color}
      modifier={modifier}
      onClick={onClick}
      ref={ref}
      size={size}
      truncate={truncate}
      type={type}
      {...props}
    />
  );
});

TextComponent.displayName = 'Text';

export const Text = styled(TextComponent)<
  TextProps
>``;

Text.displayName = 'Text';

export function HeadingComponent(
  {
    children,
    ...props
  }: Omit<TextProps, 'type'>,
): ReactElement {
  return <TextComponent type="heading" {...props}>{children}</TextComponent>;
}

export const Heading = styled(HeadingComponent)<
  Omit<TextProps, 'type'>
>``;

Heading.displayName = 'Text';
