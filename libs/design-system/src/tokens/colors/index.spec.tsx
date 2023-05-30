import { render } from '@testing-library/react';
import styled from 'styled-components';

import { ColorAlias, getAliasColorValue, getBackgroundColor, getColor } from './';

import tokens from '../../theme';

const expectedColors: [ColorAlias, string][] = [
  ['primary-100', tokens.color.primary['100']],
  ['primary-200', tokens.color.primary['200']],
  ['primary-300', tokens.color.primary['300']],
  ['accent-100', tokens.color.accent['100']],
  ['accent-200', tokens.color.accent['200']],
  ['background-100', tokens.color.background['100']],
  ['background-200', tokens.color.background['200']],
  ['background-300', tokens.color.background['300']],
  ['success-100', tokens.color.success['100']],
  ['success-200', tokens.color.success['200']],
  ['success-300', tokens.color.success['300']],
  ['danger-100', tokens.color.danger['100']],
  ['danger-200', tokens.color.danger['200']],
  ['danger-300', tokens.color.danger['300']],
];

describe('Token - Colors', () => {
  describe('getColor', () => {
    test.each(expectedColors)('getColor(%s)', (alias, expected) => {
      const Text = styled.span`
        ${getColor(alias)}
      `;
      const {getByText} = render(<Text>Hello</Text>);
      const element = getByText('Hello');

      expect(element).toHaveStyle({'color': expected});
    });
  });

  describe('getBackgroundColor', () => {
    test.each(expectedColors)('getBackground(%s)', (alias, expected) => {
      const Text = styled.span`
        ${getBackgroundColor(alias)}
      `;
      const {getByText} = render(<Text>Hello</Text>);
      const element = getByText('Hello');

      expect(element).toHaveStyle({'background-color': expected});
    });
  });

  describe('getAliasColorValue', () => {
    it('should return the correct value based on alias', () => {
      expect(getAliasColorValue('primary-100')).toEqual(tokens.color.primary['100']);
    });
  });
});
