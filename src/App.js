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
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/checkout/:id">
            <Checkout />
          </Route>
          <Route path="/addProducts">
            <AddProducts />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
