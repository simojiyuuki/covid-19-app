import { ThemedStyledProps, InterpolationValue, FlattenInterpolation, css } from 'styled-components';
import { breakpoints } from './themeOptions';

/**
 * https://github.com/morajabi/styled-media-query/blob/master/src/index.d.ts
 */
type InterpolationFunction<Props, Theme> = (
  props: ThemedStyledProps<Props, Theme>
) => InterpolationValue | FlattenInterpolation<ThemedStyledProps<Props, Theme>>;

type GeneratorFunction<Props, Theme> = (
  strings: TemplateStringsArray,
  ...interpolations: (
    | InterpolationValue
    | InterpolationFunction<Props, Theme>
    | FlattenInterpolation<ThemedStyledProps<Props, Theme>>
  )[]
) => any;

// レスポンシブ対応②: cssのmediaで変更する(Material-UIのブレークポイント定義に合わせる)
/* eslint @typescript-eslint/no-explicit-any: 0 */
const media: { [v: string]: GeneratorFunction<unknown, any> } = {
  mb: (...args) => css`
    @media screen and (max-width: ${breakpoints.mbMaxSize}) {
      ${css(...args)}
    }
  `,
  tb: (...args) => css`
    @media screen and (min-width: ${breakpoints.tbMinSize}) and (max-width: ${breakpoints.tbMaxSize}) {
      ${css(...args)}
    }
  `,
  pc: (...args) => css`
    @media screen and (min-width: ${breakpoints.pcMinSize}) {
      ${css(...args)}
    }
  `
};

export default media;
