import React, {Component} from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Auth from "./pages/auth/auth.component";

import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact={true} path={'/'} component={HomePage}/>
          <Route path={'/shop'} component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact={true}
            path={'/auth'}
            render={()=>
              this.props.currentUser ?
                <Redirect to={'/'} />
                :
                <Auth />
            }/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
