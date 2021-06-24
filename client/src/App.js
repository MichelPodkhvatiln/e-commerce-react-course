import React, {useEffect} from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { GlobalStyles } from "./global.styles";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Auth from "./pages/auth/auth.component";

import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from './redux/user/user.selectors';

const App = ({currentUser, checkUserSession}) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact={true} path={'/'} component={HomePage}/>
        <Route path={'/shop'} component={ShopPage}/>
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route
          exact={true}
          path={'/auth'}
          render={() => currentUser ?
            <Redirect to={'/'} />
            :
            <Auth />
          }/>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
