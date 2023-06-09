import type { Meta } from '@storybook/react';
import { Fragment, ReactElement } from 'react';
import styled, {
  css,
  FlattenInterpolation,
  ThemeProps,
} from 'styled-components';

import { Heading } from '../atoms';
import { Button } from './Button';
import { Theme } from '../theme';

import {
  focusStyle as primaryFocusStyle,
  hoverStyle as primaryHoverStyle,
} from './Primary';
import {
  focusStyle as successFocusStyle,
  hoverStyle as successHoverStyle,
} from './Success';
import {
  focusStyle as dangerFocusStyle,
  hoverStyle as dangerHoverStyle,
} from './Danger';

import { ButtonSize, ButtonVariant, ButtonVariants } from './types';

const Story: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default Story;

export function Default(): ReactElement {
  return <Button onClick={() => alert('Clicked')}>Click me!</Button>;
}

type VariantWithoutStyle = 'default' | 'disabled';
type VariantWithStyle = 'hover' | 'focus';
type StatusVariant = VariantWithoutStyle | VariantWithStyle;
const statusVariants: StatusVariant[] = [
  'default',
  'disabled',
  'focus',
  'hover',
];

const sizeVariants: ButtonSize[] = ['small', 'medium', 'large'];

const styleMap = {
  primary: {
    focus: primaryFocusStyle,
    hover: primaryHoverStyle,
  },
  danger: {
    focus: dangerFocusStyle,
    hover: dangerHoverStyle,
  },
  success: {
    focus: successFocusStyle,
    hover: successHoverStyle,
  },
};

const WrapContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  pointer-events: none;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
const ButtonWithStyle = styled(Button)<{
  buttonStyle: FlattenInterpolation<ThemeProps<Theme>> | null;
}>`
  ${({ buttonStyle }) =>
    buttonStyle
      ? css`
          ${buttonStyle}
        `
      : null}
`;
function Variants({ variant }: { variant: ButtonVariant }) {
  return (
    <WrapContainer>
      {statusVariants.map((statusVariant) => {
        const buttonStyle =
          styleMap[variant][statusVariant as VariantWithStyle];
        return (
          <Column key={statusVariant}>
            <Heading>{statusVariant}</Heading>
            {sizeVariants.map((size) => (
              <Fragment key={`${variant}-${statusVariant}-${size}`}>
                <Heading>{size}</Heading>
                <ButtonsContainer>
                  <ButtonWithStyle
                    buttonStyle={buttonStyle}
                    disabled={statusVariant === 'disabled'}
                    size={size}
                    variant={variant}
                  >
                    Button
                  </ButtonWithStyle>
                </ButtonsContainer>
              </Fragment>
            ))}
          </Column>
        );
      })}
    </WrapContainer>
  );
}

function variantStory(variant: ButtonVariant) {
  return (
    <>
      <span>{variant} button</span>
      <Variants variant={variant} />
    </>
  );
}

export const Primary = (): ReactElement => variantStory(ButtonVariants.PRIMARY);
export const Danger = (): ReactElement => variantStory(ButtonVariants.DANGER);
export const Success = (): ReactElement => variantStory(ButtonVariants.SUCCESS);
