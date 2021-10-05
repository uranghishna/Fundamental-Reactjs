import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import ModalPage from "./pages/ModalPage";
import NavbarComp from "./components/NavbarComp";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {

  return(
    <div>
      <Router>
      <div>
        <NavbarComp />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/counter">
            <Counter />
          </Route>
          <Route exact path="/modalpage">
            <ModalPage />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
};

export default App;

