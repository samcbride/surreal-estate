import React from "react";
import "../styles/App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

function App() {
  return (
    <div className="App">
      <h2>Surreal Estate (AKA: wrongmove)</h2>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Properties}>
          <Properties />
        </Route>
        <Route exact path="/add-property" component={AddProperty}>
          <AddProperty />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
