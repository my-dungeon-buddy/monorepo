import { Meta } from '@storybook/react';
import styled from 'styled-components';

import { ColorAliasList } from '../../tokens/colors';

import type { TextProps } from '.';
import type { ReactElement } from 'react';

import { Heading, Text } from '.';

export const Default = (props: TextProps): ReactElement => <Text {...props} />;

Default.argTypes = {
  color: {
    options: ColorAliasList,
    control: 'select',
  },
};

Default.args = {
  children: 'Hello World',
};

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export const Variants = (): ReactElement => {
  return (
    <Column>
      <>
        <Heading>Custom ThemeAlias Color</Heading>
        <Text>I am branded</Text>
      </>
      <>
        <Heading>Custom ColorAlias Color</Heading>
        <Text color="success-100">I am green</Text>
      </>
      <>
        <Heading>Render as &lt;p&gt;</Heading>
        <Text forwardedAs="p">I am a paragraph</Text>
      </>
      <>
        <Heading>Type</Heading>
        <Heading forwardedAs="h1">I am a heading</Heading>
      </>
      <>
        <Heading>Bold</Heading>
        <Text modifier="bold">I am bold</Text>
      </>
      <>
        <Heading>Size</Heading>
        <Text size="l">I am big</Text>
      </>
      <>
        <Heading>Truncate</Heading>
        <Text truncate>Hey, don&apos;t cut me off like that</Text>
      </>
    </Column>
  );
};

Variants.parameters = {
  controls: { disable: true },
};

export default {
  component: Text,
  title: 'Basic/Text',
} as Meta;
