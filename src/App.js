import React from "react";
import './App.css';
import Header from "./components/header/header.component";
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckOut from "./pages/checkout/checkout.component";
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
//import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";
import { auth } from "./firebase/firebase-utils";
import { createUserProfileDocument } from './firebase/firebase-utils';
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user.action";
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user-selector';

/*
 constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

*/ 
class App extends React.Component{
 
  unsubscribeFromAuth = null;

componentDidMount(){
      const { setCurrentUser } = this.props;
   
      this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
        
        if(userAuth){

          
          const userRef = await createUserProfileDocument(userAuth);
          

          userRef.onSnapshot(snapShot => {
              setCurrentUser({
                id: snapShot.id,
                ...snapShot.data(),
              })
          })
        }
        setCurrentUser(userAuth);
      });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){

    return (<div>
       <Header />
       <Switch>
           <Route exact path="/" component={Homepage} />
           <Route path="/shop" component={ShopPage} />
           <Route exact path="/checkout" component = {CheckOut} />
           <Route 
              exact
              path="/signin" 
              render={() => 
                 this.props.currentUser ?
                  (<Redirect to= '/' />)
                  :
                  (
                    <SignInAndSignUp />
                  )
                 } />
       </Switch>
    </div>);
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

/**
 const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})
 */
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(App);
