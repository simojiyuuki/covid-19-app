import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

type Props = {
  title: string;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ title, children }: Props) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {children}
      </HelmetProvider>
    </>
  );
};

export default Layout;
