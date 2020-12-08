import './App.css';
import Navigation from './Containers/Navigation';
import { useState, useEffect } from 'react';
import Login from './Containers/Login';
import Register from './Containers/Register';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [loggedIn, setloggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/login", { withCredentials: true, origin: "http://localhost:5000", headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' } }).then(response => {
      setUser(response["data"])
      console.log(user)
      setloggedIn(true);
    }).catch(err => {
      console.log(err);
      setloggedIn(false);
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Navigation loggedIn={loggedIn}></Navigation>
        <Switch>
          <Route setUser={setUser} path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
