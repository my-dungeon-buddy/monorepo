import type {
  FlattenSimpleInterpolation,
  SimpleInterpolation,
} from 'styled-components';

import tokens from './token.json';

const theme = tokens;

export type Theme = typeof theme;

export type StyleGenerator = () => FlattenSimpleInterpolation | undefined;

export type StyleWriter<P> = (props: P) => SimpleInterpolation | undefined;

export type StyleMapping<T extends string> = Record<T, StyleGenerator>;

export default theme;
