import React, {Component} from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Auth from "./pages/auth/auth.component";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth)
      }
    });
  }

  componentWillUnmount() {
    if(this.unsubscribeFromAuth !== null){
      this.unsubscribeFromAuth();
    }
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact={true} path={'/'} component={HomePage}/>
          <Route path={'/shop'} component={ShopPage}/>
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

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
