import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Checkout from './components/Checkout/Checkout';
import AddProducts from './components/AddProducts/AddProducts';
import AddReview from './components/AddReview/AddReview';
import AddSalePoster from './components/AddSalePoster/AddSalePoster';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import SpecificOrders from './components/SpecificOrders/SpecificOrders';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import AdminLoginForm from './components/AdminLoginForm/AdminLoginForm';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import ManageProducts from './components/ManageProducts/ManageProducts';
import AllOrders from './components/AllOrders/AllOrders';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <PrivateRoute path="/checkout/:_id">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path="/addProducts">
              <AddProducts />
            </PrivateRoute>
            <Route path="/addReview">
              <AddReview />
            </Route>
            <PrivateRoute path="/addSalePoster">
              <AddSalePoster />
            </PrivateRoute>
            <Route path="/loginFormAdmin">
              <AdminLoginForm />
            </Route>
            <PrivateRoute path="/admin">
              <AdminDashboard />
            </PrivateRoute>
            <PrivateRoute path="/manageproducts">
              <ManageProducts />
            </PrivateRoute>
            <PrivateRoute path="/AllOrders">
              <AllOrders />
            </PrivateRoute>
            <PrivateRoute path="/makeAdmin">
              <MakeAdmin />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/myOrders">
              <SpecificOrders />
            </PrivateRoute>
            <Route path="/privacyPolicy">
              <PrivacyPolicy />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
