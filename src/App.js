import React from "react";
import { Route, Switch } from 'react-router-dom';

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Auth from "./pages/auth/auth.component";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact={true} path={'/'} component={HomePage}/>
        <Route path={'/shop'} component={ShopPage}/>
        <Route path={'/auth'} component={Auth}/>
      </Switch>
     </div>
  );
}

export default App;
