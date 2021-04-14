import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Feed from "./components/feed/Feed";
import Login from "./components/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import { login, logout, selectUser } from "./features/userSlice";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import Header from "./header/Header";
import Register from "./components/register/Register";
import Widgets from "./components/widgets/Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(user);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged IN
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl
          })
        );
      } else {
        //Logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Router>
        <Header />
        {
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <div className="app__body">
                <Sidebar />
                <Feed />
                <Widgets />
              </div>
            </Route>
          </Switch>
        }
      </Router>
    </div>
  );
}

export default App;
