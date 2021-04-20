import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Root from './root.component';

const delay = (to = 1000) => new Promise((resolve) => setTimeout(resolve, to));

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  loadRootComponent: async () => {
    let counter = 0;
    while (++counter < 10) {
      if (document.querySelector('#main-content') != null) {
        return Root;
      }
      await delay(500);
    }

    throw new Error('Cannot find HUD!');
  },
  errorBoundary(err: Error, errInfo: React.ErrorInfo, props: any) {
    // Customize the root error boundary for your microfrontend here.
    return <React.Fragment />;
  },
  domElementGetter: () => document.querySelector('#main-content')!,
});

export const { bootstrap, mount, unmount } = lifecycles;
