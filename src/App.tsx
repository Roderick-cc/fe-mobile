import React from "react";
import "./App.less";
import Router from "./utils/Router";
import routes from "./router";

import store from "@/store";
import { Provider } from "react-redux";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Router routes={routes} />
      </div>
    </Provider>
  );
};

export default App;
