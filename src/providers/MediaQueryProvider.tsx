import React, { createContext, useContext, useMemo } from 'react';
import useMedia from 'use-media';
import { breakpoints } from '../styles/themeOptions';

type Prop = {
  children: React.ReactNode;
};

// アプリケーション全体で共有する値の定義
type Context = {
  isMobileSize: boolean;
  isTabletSize: boolean;
  isPcSize: boolean;
};

// Contextを生成(デフォルト: PC)
const MediaQueryContext = createContext<Context>({
  isMobileSize: false,
  isTabletSize: false,
  isPcSize: true
});

// 各デバイスでのサイズを定義(Material-UIのブレークポイント定義に合わせる)
const mediaQueries = {
  mb: `(max-width: ${breakpoints.mbMaxSize})`,
  tb: `(min-width: ${breakpoints.tbMinSize}) and (max-width: ${breakpoints.tbMaxSize})`,
  pc: `(min-width: ${breakpoints.pcMinSize})`
};

// レスポンシブ対応①: cssのmedia変更ではなく、端末毎に表示するコンポネートを切り替える場合に利用
const MediaQueryProvider: React.FC<Prop> = ({ children }: Prop) => {
  const isMobileSize = useMedia(mediaQueries.mb);
  const isTabletSize = useMedia(mediaQueries.tb);
  const isPcSize = useMedia(mediaQueries.pc);

  const value = useMemo(() => ({ isMobileSize, isTabletSize, isPcSize }), [isMobileSize, isTabletSize, isPcSize]);

  return <MediaQueryContext.Provider value={value}>{children}</MediaQueryContext.Provider>;
};

export const useMediaQueryContext = (): Context => useContext(MediaQueryContext);

export default MediaQueryProvider;
