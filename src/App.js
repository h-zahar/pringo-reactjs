import './App.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import UserRoute from './pages/UserRoute/UserRoute';
import NonUserRoute from './pages/NonUserRoute/NonUserRoute';
import AuthProvider from './contexts/AuthProvider';
import initializeAuthentication from './firebase/firebase.init';
import Login from './pages/Home/Login/Login';
import Register from './pages/Home/Register/Register';
import Feed from './pages/InsidePringo/Feed/Feed/Feed';
import MakeAPring from './pages/InsidePringo/MakeAPring/MakeAPring';
import MyPrings from './pages/InsidePringo/MyPrings/MyPrings/MyPrings';
import Profile from './pages/InsidePringo/Profile/Profile';


initializeAuthentication();

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <NonUserRoute exact path='/'>
              <Login />
            </NonUserRoute>

            <NonUserRoute path='/register'>
              <Register />
            </NonUserRoute>

            <UserRoute path='/feed'>
              <Feed />
            </UserRoute>

            <UserRoute path='/pringo'>
              <MakeAPring />
            </UserRoute>

            <UserRoute path='/prings'>
              <MyPrings />
            </UserRoute>

            <UserRoute path='/profile'>
              <Profile />
            </UserRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
