import { css } from 'styled-components';
import theme, { StyleGenerator } from '../../theme';

export type FontFamilyToken = 'heading' | 'text';

export type FontSizeToken =
  | '2xs'
  | 'xs'
  | 's'
  | 'base'
  | 'm'
  | 'l'
  | 'xl'
  | '2xl';

export type FontWeightToken = 'bold' | 'regular';

export type TextModifier = 'bold' | 'regular';

export type TextTransformToken = 'uppercase';

export type HeadingSize =
  | '2xs'
  | 'xs'
  | 's'
  | 'base'
  | 'm'
  | 'l'
  | 'xl'
  | '2xl';

export type TextSize = 'xl' | 'l' | 'm' | 'base' | 's' | 'xs';

export type TextType = 'heading' | 'text';

export function fontFamily(family: FontFamilyToken): StyleGenerator {
  return () => {
    const {font} = theme;
    const fontFamily = font.family[family];

    /* istanbul ignore if */
    if (fontFamily === undefined) {
      console.warn(`Font Family ${family} does not exist`);

      return css``;
    }

    return css`
      font-family: ${fontFamily};
    `;
  };
}

export function fontWeight(weight: FontWeightToken): StyleGenerator {
  return () => {
    const {font} = theme;
    const fontWeight = font.weight[weight];

    /* istanbul ignore if */
    if (fontWeight === undefined) {
      console.warn(`Font Weight ${fontWeight} does not exist`);

      return css``;
    }

    return css`
      font-weight: ${fontWeight};
    `;
  };
}

export function fontSize(size: FontSizeToken): StyleGenerator {
  return () => {
    const {font} = theme;
    const fontSize = font.size[size];

    /* istanbul ignore if */
    if (fontSize === undefined) {
      console.warn(`Font Size ${fontSize} does not exist`);

      return css``;
    }

    return css`
      font-size: ${fontSize};
    `;
  };
}

export function textTransform(transform: TextTransformToken): StyleGenerator {
  return () => {
    const {font} = theme;

    const textTransform = font.textTransform[transform];

    /* istanbul ignore if */
    if (textTransform === undefined) {
      console.warn(`Text Transform ${textTransform} does not exist`);

      return css``;
    }

    return css`
      text-transform: ${textTransform};
    `;
  };
}

export const headingSizesToTokens: Record<
  HeadingSize,
  Record<
    TextModifier,
    {
      fontFamily: FontFamilyToken;
      fontSize: FontSizeToken;
      fontWeight: FontWeightToken;
      textTransform?: TextTransformToken;
    }
  >
> = {
  base: {
    bold: {
      fontFamily: 'heading',
      fontSize: 'base',
      fontWeight: 'bold',
    },
    regular: {
      fontFamily: 'heading',
      fontSize: 'base',
      fontWeight: 'regular',
    },
  },
  l: {
    bold: {
      fontFamily: 'heading',
      fontSize: 'l',
      fontWeight: 'bold',
    },
    regular: {
      fontFamily: 'heading',
      fontSize: 'l',
      fontWeight: 'regular',
    },
  },
  m: {
    bold: {
      fontFamily: 'heading',
      fontSize: 'm',
      fontWeight: 'bold',
    },
    regular: {
      fontFamily: 'heading',
      fontSize: 'm',
      fontWeight: 'regular',
    },
  },
  s: {
    bold: {
      fontFamily: 'heading',
      fontSize: 's',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    regular: {
      fontFamily: 'heading',
      fontSize: 's',
      fontWeight: 'regular',
      textTransform: 'uppercase',
    },
  },
  xl: {
    bold: {
      fontFamily: 'heading',
      fontSize: 'xl',
      fontWeight: 'bold',
    },
    regular: {
      fontFamily: 'heading',
      fontSize: 'xl',
      fontWeight: 'regular',
    },
  },
  xs: {
    bold: {
      fontFamily: 'heading',
      fontSize: 'xs',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    regular: {
      fontFamily: 'heading',
      fontSize: 'xs',
      fontWeight: 'regular',
      textTransform: 'uppercase',
    },
  },
  '2xs': {
    bold: {
      fontFamily: 'heading',
      fontSize: '2xs',
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    regular: {
      fontFamily: 'heading',
      fontSize: '2xs',
      fontWeight: 'regular',
      textTransform: 'uppercase',
    },
  },
  '2xl': {
    bold: {
      fontFamily: 'heading',
      fontSize: '2xl',
      fontWeight: 'bold',
    },
    regular: {
      fontFamily: 'heading',
      fontSize: '2xl',
      fontWeight: 'regular',
    },
  },
};

const headingSizes = Object.keys(headingSizesToTokens) as HeadingSize[];

const headingSizesToCss = headingSizes.reduce((acc, size) => {
  const {textTransform: textTransformRegularToken} =
    headingSizesToTokens[size].regular;
  const {textTransform: textTransformBoldToken} =
    headingSizesToTokens[size].bold;

  return {
    ...acc,
    [size]: {
      bold: () => css`
        ${fontFamily(headingSizesToTokens[size].bold.fontFamily)}
        ${fontSize(headingSizesToTokens[size].bold.fontSize)}
        ${fontWeight(headingSizesToTokens[size].bold.fontWeight)}
        ${textTransformRegularToken && textTransform(textTransformRegularToken)}
      `,
      regular: () => css`
        ${fontFamily(headingSizesToTokens[size].regular.fontFamily)}
        ${fontSize(headingSizesToTokens[size].regular.fontSize)}
        ${fontWeight(headingSizesToTokens[size].regular.fontWeight)}
        ${textTransformBoldToken && textTransform(textTransformBoldToken)}
      `,
    },
  };
}, {});

export const textSizesToTokens: Record<
  TextSize,
  Record<
    TextModifier,
    {
      fontFamily: FontFamilyToken;
      fontSize: FontSizeToken;
      fontWeight: FontWeightToken;
    }
  >
> = {
  base: {
    bold: {
      fontFamily: 'text',
      fontSize: 'base',
      fontWeight: 'bold',
    },
    regular: {
      fontFamily: 'text',
      fontSize: 'base',
      fontWeight: 'regular',
    },
  },
  l: {
    bold: {
      fontFamily: 'text',
      fontSize: 'l',
      fontWeight: 'bold',
    },
    regular: {
      fontFamily: 'text',
      fontSize: 'l',
      fontWeight: 'regular',
    },
  },
  xl: {
    bold: {
      fontFamily: 'text',
      fontSize: 'xl',
      fontWeight: 'bold',
    },
    regular: {
      fontFamily: 'text',
      fontSize: 'xl',
      fontWeight: 'regular',
    },
  },
  m: {
    bold: {
      fontFamily: 'text',
      fontSize: 'm',
      fontWeight: 'bold',
    },
    regular: {
      fontFamily: 'text',
      fontSize: 'm',
      fontWeight: 'regular',
    },
  },
  s: {
    bold: {
      fontFamily: 'text',
      fontSize: 's',
      fontWeight: 'bold',
    },
    regular: {
      fontFamily: 'text',
      fontSize: 's',
      fontWeight: 'regular',
    },
  },
  xs: {
    bold: {
      fontFamily: 'text',
      fontSize: 'xs',
      fontWeight: 'bold',
    },
    regular: {
      fontFamily: 'text',
      fontSize: 'xs',
      fontWeight: 'regular',
    },
  },
};

const textSizes = Object.keys(textSizesToTokens) as TextSize[];

const textSizesToCss = textSizes.reduce((acc, size) => {
  return {
    ...acc,
    [size]: {
      bold: () => css`
        ${fontFamily(textSizesToTokens[size].bold.fontFamily)}
        ${fontSize(textSizesToTokens[size].bold.fontSize)}
        ${fontWeight(textSizesToTokens[size].bold.fontWeight)}
      `,
      regular: () => css`
        ${fontFamily(textSizesToTokens[size].regular.fontFamily)}
        ${fontSize(textSizesToTokens[size].regular.fontSize)}
        ${fontWeight(textSizesToTokens[size].regular.fontWeight)}
      `,
    },
  };
}, {});

const aliases = {
  heading: headingSizesToCss,
  text: textSizesToCss,
};

export function getTextStyle(
  type: TextType,
  size: HeadingSize | TextSize,
  initialModifier?: TextModifier
): StyleGenerator {
  const initialStyle = aliases?.[type]?.[size];

  const modifier = initialModifier || (type === 'text' ? 'regular' : 'bold');

  return initialStyle?.[modifier];
}

function getFontSizeToken(
  type: TextType,
  size: HeadingSize | TextSize,
  initialModifier?: TextModifier
): FontSizeToken {
  const modifier: TextModifier | null =
    initialModifier || (type === 'text' ? 'regular' : 'bold');

  return type === 'heading'
    ? headingSizesToTokens[size as TextSize][modifier as TextModifier].fontSize
    : textSizesToTokens[size as TextSize][modifier as TextModifier].fontSize;
}

function getFontFamilyToken(
  type: TextType,
  size: HeadingSize | TextSize,
  initialModifier?: TextModifier
): FontFamilyToken {
  const modifier: TextModifier | null =
    initialModifier || (type === 'text' ? 'regular' : 'bold');

  return type === 'heading'
    ? headingSizesToTokens[size as TextSize][modifier as TextModifier].fontFamily
    : textSizesToTokens[size as TextSize][modifier as TextModifier].fontFamily;
}

export function getFontSizeValue(
  type: TextType,
  size: HeadingSize | TextSize,
  initialModifier?: TextModifier
): string {
  const fontSizeToken = getFontSizeToken(type, size, initialModifier);

  return theme.font.size[fontSizeToken];
}

export function getFontFamilyValue(
  type: TextType,
  size: HeadingSize | TextSize,
  initialModifier?: TextModifier
): string {
  const fontFamilyToken = getFontFamilyToken(type, size, initialModifier);

  return theme.font.family[fontFamilyToken];
}
