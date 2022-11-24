import { CssBaseline, ThemeProvider } from "@material-ui/core";
import React from "react";
import { Provider } from "react-redux";
import Item from "./components/Item";
import { store } from "./store/store";
import theme from "./theme";

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <div>
        <p>A bare bones application!</p>
        <Item />
      </div>
    </ThemeProvider>
  </Provider>
);
export default App;
