import './App.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import AuthProvider from './contexts/AuthProvider';
import initializeAuthentication from './firebase/firebase.init';
import Login from './pages/Home/Login/Login';
import Register from './pages/Home/Register/Register';
import Feed from './pages/InsidePringo/Feed/Feed';
import MakeAPring from './pages/InsidePringo/MakeAPring/MakeAPring';
import MyPrings from './pages/InsidePringo/MyPrings/MyPrings';
import Profile from './pages/InsidePringo/Profile/Profile';


initializeAuthentication();

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Login />
            </Route>

            <Route path='/register'>
              <Register />
            </Route>

            <Route path='/feed'>
              <Feed />
            </Route>

            <Route path='/pringo'>
              <MakeAPring />
            </Route>

            <Route path='/prings'>
              <MyPrings />
            </Route>

            <Route path='/profile'>
              <Profile />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
