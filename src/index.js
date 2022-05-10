import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import 'focus-visible/dist/focus-visible'
// //启动页面，包含vim，Link
// import App from './App';

import App from './ui/UI1';

import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
const colors = {
  brand:{
    900: '#FF0000',
    800: '#00F000',
    700: '#2a69ac',
  },
}
const theme = extendTheme({colors})
ReactDOM.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <App />
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
