import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import GlobalStyles from './GlobalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Header />
    <Menu />
  </React.StrictMode>
);
