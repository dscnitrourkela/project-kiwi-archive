import * as React from 'react';
import NextApp from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

// import '@hackclub/theme/fonts/reg-bold.css'
import theme from '../src/lib/theme';
import { ThemeProvider } from 'theme-ui';
// import ColorSwitcher from '../components/color-switcher';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        {/* <ColorSwitcher /> */}
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
