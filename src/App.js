import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
//import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Route, Switch } from "react-router-dom";




function App() {
  return (
    <div>
        <Switch>
          <Route exact path="/" component = {Homepage} />
          <Route path="/shop" component = {ShopPage} />
        </Switch>
    </div>
  );
}

export default App;
