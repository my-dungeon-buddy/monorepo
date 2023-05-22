import type { Meta } from '@storybook/react';
import { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import {
  backgroundColor,
  colorsTokens,
  ColorToken,
  getAliasColorValue,
  LightToken,
} from './index';

const Story: Meta = {
  title: 'Tokens/Colors',
  parameters: {
    readme: require('../../../../../README.md'),
  }
};
export default Story;

const Container = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, min-content);
  white-space: nowrap;
`;

const Header = styled.span`
  color: #000;
  font-weight: 700;
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
      <Header>ALIAS</Header>
      <Header>COLOR</Header>
      <Header>HEXA</Header>
      {colorsTokens.map(({name, color, light}) => (
        <>
          <Header>{name}</Header>
          <ColorBox color={color} light={light} />
          <span>{getAliasColorValue(name)}</span>
        </>
      ))}
    </Container>
  )
}
