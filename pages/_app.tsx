import { NextComponentType } from 'next';
import { AppProps, AppInitialProps, AppContext } from 'next/app';
import React from 'react';
import wrapper from '@stores/store';

/**
 * App Component
 *
 * @param {*} {
 *   Component,
 *   pageProps,
 * }
 * @return {*}
 */
const ReactApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(ReactApp);
