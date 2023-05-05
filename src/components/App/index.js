import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../../assets/styles/global';
import { AppContainer } from './styles';
import { Header } from '../Header';
// import { ContactsList } from '../ContactsList';
import _default from '../../assets/styles/themes/default';
import { Routes } from '../../Routes';
import {BrowserRouter} from 'react-router-dom'

import { Home } from '../../pages/Home';

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={_default}>
        <AppContainer>
          <Header />
            <Routes />
          <GlobalStyles />
        </AppContainer>
      </ThemeProvider>
    </BrowserRouter>
  );
}
