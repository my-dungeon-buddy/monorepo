import { render, screen } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

import type {
  HeadingSize,
  TextModifier,
  TextSize,
  TextType,
} from '.';

import {
  getFontFamilyValue,
  getFontSizeValue,
  getTextStyle
} from '.';
import theme from '../../theme';

const { font: themeFont } = theme;

describe('Typography', () => {
  describe('getTextStyle', () => {
    describe('Headings', () => {
      const headingProps: { type: TextType } = { type: 'heading' };

      const headings: {
        expected: {
          key: string;
          value: string | number;
        }[];
        modifier?: TextModifier;
        size: HeadingSize;
        type: TextType;
      }[] = [
        {
          ...headingProps,
          expected: [
            { key: 'font-family', value: themeFont.family.heading },
            { key: 'font-weight', value: themeFont.weight.regular },
            { key: 'font-size', value: themeFont.size['2xl'] },
          ],
          modifier: 'regular',
          size: '2xl',
        },
        {
          ...headingProps,
          expected: [
            { key: 'font-family', value: themeFont.family.heading },
            { key: 'font-weight', value: themeFont.weight.bold },
            { key: 'font-size', value: themeFont.size['2xl'] },
          ],
          modifier: 'bold',
          size: '2xl',
        },
        {
          ...headingProps,
          expected: [
            { key: 'font-family', value: themeFont.family.heading },
            { key: 'font-weight', value: themeFont.weight.regular },
            { key: 'font-size', value: themeFont.size.xl },
          ],
          modifier: 'regular',
          size: 'xl',
        },
        {
          ...headingProps,
          expected: [
            { key: 'font-family', value: themeFont.family.heading },
            { key: 'font-weight', value: themeFont.weight.bold },
            { key: 'font-size', value: themeFont.size.xl },
          ],
          modifier: 'bold',
          size: 'xl',
        },
        {
          ...headingProps,
          expected: [
            { key: 'font-family', value: themeFont.family.heading },
            { key: 'font-weight', value: themeFont.weight.regular },
            { key: 'font-size', value: themeFont.size.l },
          ],
          modifier: 'regular',
          size: 'l',
        },
        {
          ...headingProps,
          expected: [
            { key: 'font-family', value: themeFont.family.heading },
            { key: 'font-weight', value: themeFont.weight.bold },
            { key: 'font-size', value: themeFont.size.l },
          ],
          modifier: 'bold',
          size: 'l',
        },
        {
          ...headingProps,
          expected: [
            { key: 'font-family', value: themeFont.family.heading },
            { key: 'font-weight', value: themeFont.weight.regular },
            { key: 'font-size', value: themeFont.size.m },
          ],
          modifier: 'regular',
          size: 'm',
        },
        {
          ...headingProps,
          expected: [
            { key: 'font-family', value: themeFont.family.heading },
            { key: 'font-weight', value: themeFont.weight.bold },
            { key: 'font-size', value: themeFont.size.m },
          ],
          modifier: 'bold',
          size: 'm',
        },
        {
          ...headingProps,
          expected: [
            { key: 'font-family', value: themeFont.family.heading },
            { key: 'font-weight', value: themeFont.weight.regular },
            { key: 'font-size', value: themeFont.size.base },
          ],
          modifier: 'regular',
          size: 'base',
        },
        {
          ...headingProps,
          expected: [
            { key: 'font-family', value: themeFont.family.heading },
            { key: 'font-weight', value: themeFont.weight.bold },
            { key: 'font-size', value: themeFont.size.base },
          ],
          size: 'base',
        },
        {
          ...headingProps,
          expected: [
            { key: 'font-family', value: themeFont.family.heading },
            { key: 'font-weight', value: themeFont.weight.regular },
            { key: 'font-size', value: themeFont.size.s },
            { key: 'text-transform', value: themeFont.textTransform.uppercase },
          ],
          modifier: 'regular',
          size: 's',
        },
        {
          ...headingProps,
          expected: [
            { key: 'font-family', value: themeFont.family.heading},
            { key: 'font-weight', value: themeFont.weight.bold },
            { key: 'font-size', value: themeFont.size.s },
            { key: 'text-transform', value: themeFont.textTransform.uppercase },
          ],
          modifier: 'bold',
          size: 's',
        },
        {
          ...headingProps,
          expected: [
            { key: 'font-family', value: themeFont.family.heading},
            { key: 'font-weight', value: themeFont.weight.regular },
            { key: 'font-size', value: themeFont.size.xs },
            { key: 'text-transform', value: themeFont.textTransform.uppercase },
          ],
          modifier: 'regular',
          size: 'xs',
        },
        {
          ...headingProps,
          expected: [
            { key: 'font-family', value: themeFont.family.heading},
            { key: 'font-weight', value: themeFont.weight.bold },
            { key: 'font-size', value: themeFont.size.xs },
            { key: 'text-transform', value: themeFont.textTransform.uppercase },
          ],
          modifier: 'bold',
          size: 'xs',
        },
        {
          ...headingProps,
          expected: [
            { key: 'font-family', value: themeFont.family.heading},
            { key: 'font-weight', value: themeFont.weight.regular },
            { key: 'font-size', value: themeFont.size['2xs'] },
            { key: 'text-transform', value: themeFont.textTransform.uppercase },
          ],
          modifier: 'regular',
          size: '2xs',
        },
        {
          ...headingProps,
          expected: [
            { key: 'font-family', value: themeFont.family.heading},
            { key: 'font-weight', value: themeFont.weight.bold },
            { key: 'font-size', value: themeFont.size['2xs'] },
            { key: 'text-transform', value: themeFont.textTransform.uppercase },
          ],
          modifier: 'bold',
          size: '2xs',
        },
      ];

      headings.forEach(({ expected, modifier, size, type }) => {
        it(`should return the correct values for ${type}-${size}`, () => {
          const Text = styled.span`
            ${getTextStyle(type, size, modifier)}
          `;

          render(<Text>Foo</Text>);

          const element = screen.getByText('Foo');

          expected.forEach(({ key, value }) => {
            expect(element).toHaveStyle({[key]: value});
          });
        });
      });
    });

    describe('Texts', () => {
      const textProps: { type: TextType } = {
        type: 'text',
      };

      const texts: {
        expected: {
          key: string;
          value: string | number;
        }[];
        modifier?: TextModifier;
        size: TextSize;
        type: TextType;
      }[] = [
        {
          ...textProps,
          expected: [
            { key: 'font-family', value: themeFont.family.text },
            { key: 'font-weight', value: themeFont.weight.bold },
            { key: 'font-size', value: themeFont.size.base },
          ],
          modifier: 'bold',
          size: 'base',
        },
        {
          ...textProps,
          expected: [
            { key: 'font-family', value: themeFont.family.text },
            { key: 'font-weight', value: themeFont.weight.regular },
            { key: 'font-size', value: themeFont.size.base },
          ],
          modifier: 'regular',
          size: 'base',
        },
        {
          ...textProps,
          expected: [
            { key: 'font-family', value: themeFont.family.text },
            { key: 'font-weight', value: themeFont.weight.bold },
            { key: 'font-size', value: themeFont.size.s },
          ],
          modifier: 'bold',
          size: 's',
        },
        {
          ...textProps,
          expected: [
            { key: 'font-family', value: themeFont.family.text },
            { key: 'font-weight', value: themeFont.weight.regular },
            { key: 'font-size', value: themeFont.size.s },
          ],
          modifier: 'regular',
          size: 's',
        },
        {
          ...textProps,
          expected: [
            { key: 'font-family', value: themeFont.family.text },
            { key: 'font-weight', value: themeFont.weight.bold },
            { key: 'font-size', value: themeFont.size.m },
          ],
          modifier: 'bold',
          size: 'm',
        },
        {
          ...textProps,
          expected: [
            { key: 'font-family', value: themeFont.family.text },
            { key: 'font-weight', value: themeFont.weight.regular },
            { key: 'font-size', value: themeFont.size.m },
          ],
          modifier: 'regular',
          size: 'm',
        },
        {
          ...textProps,
          expected: [
            { key: 'font-family', value: themeFont.family.text },
            { key: 'font-weight', value: themeFont.weight.bold },
            { key: 'font-size', value: themeFont.size.l },
          ],
          modifier: 'bold',
          size: 'l',
        },
        {
          ...textProps,
          expected: [
            { key: 'font-family', value: themeFont.family.text },
            { key: 'font-weight', value: themeFont.weight.regular },
            { key: 'font-size', value: themeFont.size.l },
          ],
          modifier: 'regular',
          size: 'l',
        },
        {
          ...textProps,
          expected: [
            { key: 'font-family', value: themeFont.family.text },
            { key: 'font-weight', value: themeFont.weight.bold },
            { key: 'font-size', value: themeFont.size.xl },
          ],
          modifier: 'bold',
          size: 'xl',
        },
        {
          ...textProps,
          expected: [
            { key: 'font-family', value: themeFont.family.text },
            { key: 'font-weight', value: themeFont.weight.regular },
            { key: 'font-size', value: themeFont.size.xl },
          ],
          modifier: 'regular',
          size: 'xl',
        },
        {
          ...textProps,
          expected: [
            { key: 'font-family', value: themeFont.family.text },
            { key: 'font-weight', value: themeFont.weight.bold },
            { key: 'font-size', value: themeFont.size.xs },
          ],
          modifier: 'bold',
          size: 'xs',
        },
        {
          ...textProps,
          expected: [
            { key: 'font-family', value: themeFont.family.text },
            { key: 'font-weight', value: themeFont.weight.regular },
            { key: 'font-size', value: themeFont.size.xs },
          ],
          modifier: 'regular',
          size: 'xs',
        },
        {
          ...textProps,
          expected: [
            { key: 'font-family', value: themeFont.family.text },
            { key: 'font-weight', value: themeFont.weight.regular },
            { key: 'font-size', value: themeFont.size.base },
          ],
          size: 'base',
        },
      ];

      texts.forEach(({ expected, modifier, size, type }) => {
        it(`should return the correct values for ${type}-${size}-${modifier}`, () => {
          const Text = styled.span`
            ${getTextStyle(type, size, modifier)}
          `;

          render(<Text>Foo</Text>);

          const element = screen.getByText('Foo');

          expected.forEach(({ key, value }) => {
            expect(element).toHaveStyle({[key]: value});
          });
        });
      });
    });
  });

  describe('getFontFamilyValue', () => {
    it('should return the correct value based on text type, size and modifier', () => {
      expect(getFontFamilyValue('text', 'base', 'bold')).toEqual('Roboto');
    });

    it('should return the correct value based on text type and size', () => {
      expect(getFontFamilyValue('text', 'base')).toEqual('Roboto');
    });

    it('should return the correct value based on heading type and size', () => {
      expect(getFontFamilyValue('heading', '2xl')).toEqual('Roboto');
    });
  });

  describe('getFontSizeValue', () => {
    it('should return the correct value based on text type, size and modifier', () => {
      expect(getFontSizeValue('text', 'base', 'bold')).toEqual('1rem');
    });

    it('should return the correct value based on text type and size', () => {
      expect(getFontSizeValue('text', 'base')).toEqual('1rem');
    });

    it('should return the correct value based on heading type and size', () => {
      expect(getFontSizeValue('heading', '2xl')).toEqual('3rem');
    });
  });
});
