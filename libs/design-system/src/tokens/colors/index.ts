import { css } from 'styled-components';

import tokens, { StyleGenerator, StyleMapping } from '../../theme';

export type ColorToken =
  | 'primary'
  | 'accent'
  | 'background'
  | 'success'
  | 'danger';

export type LightToken =
  | '100'
  | '200'
  | '300';

export type ColorAlias =
  | 'primary-100'
  | 'primary-200'
  | 'primary-300'
  | 'accent-100'
  | 'accent-200'
  | 'background-100'
  | 'background-200'
  | 'background-300'
  | 'success-100'
  | 'success-200'
  | 'success-300'
  | 'danger-100'
  | 'danger-200'
  | 'danger-300';

export const ColorAliasList: ColorAlias[] = [
  'primary-100',
  'primary-200',
  'primary-300',
  'accent-100',
  'accent-200',
  'background-100',
  'background-200',
  'background-300',
  'success-100',
  'success-200',
  'success-300',
  'danger-100',
  'danger-200',
  'danger-300',
];

export const colorAliasesToTokens: Record<ColorAlias, [ColorToken, LightToken]> = {
  'primary-100': ['primary', '100'],
  'primary-200': ['primary', '200'],
  'primary-300': ['primary', '300'],
  'accent-100': ['accent', '100'],
  'accent-200': ['accent', '200'],
  'background-100': ['background', '100'],
  'background-200': ['background', '200'],
  'background-300': ['background', '300'],
  'success-100': ['success', '100'],
  'success-200': ['success', '200'],
  'success-300': ['success', '300'],
  'danger-100': ['danger', '100'],
  'danger-200': ['danger', '200'],
  'danger-300': ['danger', '300'],
};
export const colorsTokens: {
    name: ColorAlias,
    color: ColorToken,
    light: LightToken,
  }[] = [
    {name: 'primary-100', color: 'primary', light: '100'},
    {name: 'primary-200', color: 'primary', light: '200'},
    {name: 'primary-300', color: 'primary', light: '300'},
    {name: 'accent-100', color: 'accent', light: '100'},
    {name: 'accent-200', color: 'accent', light: '200'},
    {name: 'background-100', color: 'background', light: '100'},
    {name: 'background-200', color: 'background', light: '200'},
    {name: 'background-300', color: 'background', light: '300'},
    {name: 'success-100', color: 'success', light: '100'},
    {name: 'success-200', color: 'success', light: '200'},
    {name: 'success-300', color: 'success', light: '300'},
    {name: 'danger-100', color: 'danger', light: '100'},
    {name: 'danger-200', color: 'danger', light: '200'},
    {name: 'danger-300', color: 'danger', light: '300'},
  ]
;

function getThemeColor(color: ColorToken, light: LightToken): string {
  return tokens.color[color][light] || /* istanbul ignore next */ '';
}

export function getAliasColorValue(alias: ColorAlias): string {
  const [color, light] = colorAliasesToTokens[alias];

  return getThemeColor(color, light);
}

// COLOR //
export function color(color: ColorToken, light: LightToken): StyleGenerator {
  return () => {
    const selectedColor = getThemeColor(color, light);
    /* istanbul ignore if */
    if (selectedColor === '') {
      console.warn(`Color ${color}-${light} doesn't exist`);
      return css``;
    }

    return css`
      color: ${selectedColor}
    `;
  };
}

const aliasesToColorCss = ColorAliasList.reduce(
  (acc, alias) => ({
    ...acc,
    [alias]: color(...colorAliasesToTokens[alias]),
  }),
  {},
) as StyleMapping<ColorAlias>;

export function getColor(alias: ColorAlias): StyleGenerator {
  return aliasesToColorCss[alias];
}

// BACKGROUND //
export function backgroundColor(color: ColorToken, light: LightToken): StyleGenerator {
  return () => {
    const selectedColor = getThemeColor(color, light);
    /* istanbul ignore if */
    if (selectedColor === '') {
      console.warn(`Color ${color}-${light} doesn't exist`);
      return css``;
    }

    return css`
      background-color: ${selectedColor}
    `;
  };
}

const aliasesToBackgroundCss = ColorAliasList.reduce(
  (acc, alias) => ({
    ...acc,
    [alias]: backgroundColor(...colorAliasesToTokens[alias]),
  }),
  {},
) as StyleMapping<ColorAlias>;

export function getBackgroundColor(alias: ColorAlias): StyleGenerator {
  return aliasesToBackgroundCss[alias];
}
