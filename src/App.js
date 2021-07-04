import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Checkout from './components/Checkout/Checkout';
import AddProducts from './components/AddProducts/AddProducts';
import AddReview from './components/AddReview/AddReview';
import AddSalePoster from './components/AddSalePoster/AddSalePoster';
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/checkout/:_id">
            <Checkout />
          </Route>
          <Route path="/addProducts">
            <AddProducts />
          </Route>
          <Route path="/addReview">
            <AddReview />
          </Route>
          <Route path="/addSalePoster">
            <AddSalePoster />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
