import { ButtonHTMLAttributes, ReactNode } from 'react';
import { StyledComponent } from 'styled-components';

import { Theme } from '../theme';

import { DangerButton } from './Danger';
import { PrimaryButton } from './Primary';
import { ButtonSize, ButtonVariant, ButtonVariants } from './types';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

export function Button(
  {
    children,
    size = 'medium',
    variant = ButtonVariants.PRIMARY,
    ...props
  }: ButtonProps) {
  let VariantButton:
    | StyledComponent<'button', Theme, { $size?: ButtonSize }>
    | undefined;

  switch (variant) {
    case ButtonVariants.DANGER:
      VariantButton = DangerButton;
      break;
    case ButtonVariants.PRIMARY:
    default:
      VariantButton = PrimaryButton;
      break;
  }
  return (
    <VariantButton {...props} $size={size}>
      {children}
    </VariantButton>
  );
}

export default Button;
