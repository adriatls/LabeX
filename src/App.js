import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Footer from "./components/footer/footer.js";
import Header from "./components/header/Header.js";
import { Router } from "./route/Router";
import theme from './constants/theme';
import {Page} from "./Styled.js"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Page>
        <Header />
        <Router />
        <Footer />
      </Page>
    </ThemeProvider>
  );
};

export default App;
