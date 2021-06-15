import React from "react";
import { Route, Switch } from 'react-router-dom';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact={true} path={'/'} component={HomePage}/>
        <Route path={'/shop'} component={ShopPage}/>
      </Switch>
     </div>
  );
}

export default App;
