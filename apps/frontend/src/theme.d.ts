import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      background: {
        100: string,
        200: string,
        300: string,
      },
      primary: {
        100: string,
        200: string,
        300: string,
      },
      accent: {
        100: string,
        200: string,
      },
      text: {
        100: string,
        200: string,
      },
    }
  }
}
