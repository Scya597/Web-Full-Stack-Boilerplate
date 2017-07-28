import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './scss/style.scss';

const rootElement = document.getElementById('root');

let app;
if (module.hot) {
  const { AppContainer } = require('react-hot-loader');
  app = (
    <AppContainer>
      <App />
    </AppContainer>
  );

  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').default;
    render(
      <AppContainer>
        <NewApp />
      </AppContainer>,
      rootElement,
    );
  });
} else {
  app = <App />;
}

// const app = <App />;

render(app, rootElement);
