import { Meta } from '@storybook/react';
import React, { Fragment } from 'react';
import styled from 'styled-components';

import type { ReactElement } from 'react';

import {
  Text as TextComponent,
  Heading as HeadingComponent,
} from '../../atoms/Text';
import theme from '../../theme';

import type { TextSize, HeadingSize, TextModifier } from '.';
import { textSizesToTokens, headingSizesToTokens } from '.';

const textModifiers: TextModifier[] = ['regular', 'bold'];

const textSizes: TextSize[] = ['xs', 's', 'base', 'm', 'l', 'xl'];

const headingSizes: HeadingSize[] = [
  '2xs',
  'xs',
  's',
  'base',
  'm',
  'l',
  'xl',
  '2xl',
];

const Container = styled.div`
  display: grid;
  gap: 15px;
  grid-auto-flow: row;
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: min-content 1fr 2fr 1fr 2fr;
  white-space: nowrap;
`;

const TokenWrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
`;

const TokenGrid = styled(Grid)`
  gap: 10px;
  grid-template-columns: repeat(3, min-content);
`;

const tokenValues = (entry: string[], index: number) => {
  switch (index) {
    case 0:
      return theme.font.family[entry[1]];
    case 1:
      return theme.font.size[entry[1]];
    case 2:
      return theme.font.weight[entry[1]];
    case 3:
      return theme.font.lineHeight[entry[1]];
    default:
      return '';
  }
};

export function Text(): ReactElement {
  return (
    <Container>
      <HeadingComponent>Text Typography</HeadingComponent>
      <Row>
        <Column>
          <Grid>
            <TextComponent modifier="bold">
              SIZE
            </TextComponent>
            <TextComponent modifier="bold">
              TOKENS
            </TextComponent>
            <TextComponent modifier="bold">
              REGULAR
            </TextComponent>
            <TextComponent modifier="bold">
              TOKENS
            </TextComponent>
            <TextComponent modifier="bold">
              BOLD
            </TextComponent>
            {textSizes.map((size) => (
              <Fragment key={size}>
                <Wrapper>
                  <TextComponent modifier="bold" size="m">
                    {size.toUpperCase()}
                  </TextComponent>
                </Wrapper>
                {textModifiers.map((modifier) => (
                  <Fragment key={modifier}>
                    <TokenGrid>
                      {Object.entries(textSizesToTokens[size][modifier]).map(
                        (entry, index) => (
                          <Fragment key={`${entry}`}>
                            <HeadingComponent modifier="regular" size="2xs">
                              {entry[0]}
                            </HeadingComponent>
                            <HeadingComponent size="2xs">
                              {entry[1]}
                            </HeadingComponent>
                            <TokenWrapper>
                              <TextComponent size="xs">
                                {tokenValues(entry, index)}
                              </TextComponent>
                            </TokenWrapper>
                          </Fragment>
                        ),
                      )}
                    </TokenGrid>
                    <Wrapper>
                      <TextComponent modifier={modifier} size={size}>
                        MyDungeonBuddy
                      </TextComponent>
                    </Wrapper>
                  </Fragment>
                ))}
              </Fragment>
            ))}
          </Grid>
        </Column>
      </Row>
    </Container>
  );
}

export function Heading(): ReactElement {
  return (
    <Container>
      <HeadingComponent>Heading Typography</HeadingComponent>
      <Row>
        <Column>
          <Grid>
            <TextComponent modifier="bold">
              SIZE
            </TextComponent>
            <TextComponent modifier="bold">
              TOKENS
            </TextComponent>
            <TextComponent modifier="bold">
              REGULAR
            </TextComponent>
            <TextComponent modifier="bold">
              TOKENS
            </TextComponent>
            <TextComponent modifier="bold">
              BOLD
            </TextComponent>
            {headingSizes.map((size) => (
              <Fragment key={size}>
                <Wrapper>
                  <TextComponent modifier="bold" size="m">
                    {size.toUpperCase()}
                  </TextComponent>
                </Wrapper>
                {textModifiers.map((modifier) => (
                  <Fragment key={modifier}>
                    <TokenGrid>
                      {Object.entries(headingSizesToTokens[size][modifier]).map(
                        (entry, index) => (
                          <Fragment key={`${entry}`}>
                            <HeadingComponent modifier="regular" size="2xs">
                              {entry[0]}
                            </HeadingComponent>
                            <HeadingComponent size="2xs">
                              {entry[1]}
                            </HeadingComponent>
                            <TextComponent size="xs">
                              {tokenValues(entry, index)}
                            </TextComponent>
                          </Fragment>
                        ),
                      )}
                    </TokenGrid>
                    <Wrapper>
                      <HeadingComponent modifier={modifier} size={size}>
                        MyDungeonBuddy
                      </HeadingComponent>
                    </Wrapper>
                  </Fragment>
                ))}
              </Fragment>
            ))}
          </Grid>
        </Column>
      </Row>
    </Container>
  );
}

export default {
  title: 'Tokens/Typography',
} as Meta;
