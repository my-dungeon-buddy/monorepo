import type { Meta } from '@storybook/react';
import { ReactElement } from 'react';
import styled, { css } from 'styled-components';

import {
  backgroundColor,
  colorsTokens,
  ColorToken,
  getAliasColorValue,
  LightToken,
} from './';

import { Heading, Text } from '../../atoms/Text';

const Story: Meta = {
  title: 'Tokens/Colors',
  parameters: {
    readme: require('README.md'),
  }
};
export default Story;

const Container = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, min-content);
  white-space: nowrap;
`;

const ColorBox = styled.div<{
  color: ColorToken;
  light: LightToken;
}>`
  border-radius: 6px;
  height: 35px;
  width: 35px;

  ${({ color, light }) => css`
    ${backgroundColor(color, light)}
  `}
`;

export function Default(): ReactElement {
  return (
    <Container>
      <Heading>ALIAS</Heading>
      <Heading>COLOR</Heading>
      <Heading>HEXA</Heading>
      {colorsTokens.map(({name, color, light}) => (
        <>
          <Heading>{name}</Heading>
          <ColorBox color={color} light={light} />
          <Text>{getAliasColorValue(name)}</Text>
        </>
      ))}
    </Container>
  )
}
