import React, { createContext, useContext, useMemo } from 'react';
import useMedia from 'use-media';

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

const mediaQueries = {
  mobile: '(max-width: 519px)',
  tablet: '(min-width: 520px) and (max-width: 959px)',
  pc: '(min-width: 960px)'
};

// レスポンシブ対応: cssのmedia変更ではなく、端末毎に表示するコンポネートを切り替える場合に利用
const MediaQueryProvider: React.FC<Prop> = ({ children }: Prop) => {
  const isMobileSize = useMedia(mediaQueries.mobile);
  const isTabletSize = useMedia(mediaQueries.tablet);
  const isPcSize = useMedia(mediaQueries.pc);
  const value = useMemo(() => ({ isMobileSize, isTabletSize, isPcSize }), [isMobileSize, isTabletSize, isPcSize]);

  return <MediaQueryContext.Provider value={value}>{children}</MediaQueryContext.Provider>;
};

export const useMediaQueryContext = (): Context => useContext(MediaQueryContext);

export default MediaQueryProvider;
