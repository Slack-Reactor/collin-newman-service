import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
// eslint-disable-next-line no-unused-vars
import CssBaseline from '@material-ui/core/CssBaseline';
import 'fontsource-roboto';
import App from './components/App';

const generateClassName = createGenerateClassName({
  productionPrefix: 'collin',
  seed: 'newman',
});

const WrappedApp = () => (
  <StylesProvider generateClassName={generateClassName}><App /></StylesProvider>
);

ReactDOM.render(<WrappedApp />, document.getElementById('collin'));
