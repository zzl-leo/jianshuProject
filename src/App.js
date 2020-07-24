import React from "react";
import Header from "./common/header/index";
import store from "./store/index";
import { Provider } from "react-redux";
import { BrowserHistory, Route } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <Header />

      <BrowserHistory>
        <Route>
          
        </Route>
      </BrowserHistory>
    </Provider>
  );
}

export default App;
