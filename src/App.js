import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import { Provider } from "react-redux";
//import store from './store/index' 

import "./App.css";

import SideBar from "./components/SideBar";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

function App() {
  return (
    //<Provider store={store}>
      <Router>
        <div className="App">
          <SideBar />
          <Switch>
            <Route exact path="/" component={Page1} />
            <Route path="/page2" component={Page2} />
          </Switch>
        </div>
      </Router>
   // </Provider>
  );
}

export default App;
