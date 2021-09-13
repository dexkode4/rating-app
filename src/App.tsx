import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { MainRouter } from "./router";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <MainRouter />
    </Router>
  </ChakraProvider>
);
