import { ThemedStyledProps, InterpolationValue, FlattenInterpolation, css } from 'styled-components';

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

// レスポンシブ対応: cssのmedia変更する
// provider/MediaQUeryProvider.tsxのルールに合わせる
/* eslint @typescript-eslint/no-explicit-any: 0 */
const media: { [v: string]: GeneratorFunction<unknown, any> } = {
  mb: (...args) => css`
    @media screen and (max-width: 519px) {
      ${css(...args)}
    }
  `,
  tb: (...args) => css`
    @media screen and (min-width: 520px) and (max-width: 959px) {
      ${css(...args)}
    }
  `,
  pc: (...args) => css`
    @media screen and (min-width: 960px) {
      ${css(...args)}
    }
  `
};

export default media;
