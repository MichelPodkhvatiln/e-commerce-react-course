import React from "react";
import { Route, Switch } from 'react-router-dom';

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact={true} path={'/'} component={HomePage}/>
        <Route path={'/hats'} component={HatsPage}/>
      </Switch>
     </div>
  );
}

export default App;
