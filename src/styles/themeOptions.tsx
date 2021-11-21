/**
 * Material-UIのブレークポイント定義上書き
 * xs, extra-small: 0px ~ 599px(モバイル用)
 * sm, small: 600px ~ 959px(タブレット用)
 * md, medium: 960px ~ 1199px(PC用)
 * lg, large: 1200px ~ 1535px(PC用)
 * xl, extra-large: 1536px以上(PC用)
 */
export const themeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1836
    }
  }
};

export const breakpoints = {
  mbMaxSize: `${themeOptions.breakpoints.values.sm - 1}px`,
  tbMinSize: `${themeOptions.breakpoints.values.sm}px`,
  tbMaxSize: `${themeOptions.breakpoints.values.md - 1}px`,
  pcMinSize: `${themeOptions.breakpoints.values.md}px`
};

export default themeOptions;
