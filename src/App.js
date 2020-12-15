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
    console.log(loggedIn)
  })

  const login = (data) => {
    setUser(data);
    setloggedIn(true);
    console.log(loggedIn)
  }

  return (
    <Router>
      <div className="App">
        <Navigation loggedIn={loggedIn} user={user}></Navigation>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login login={login} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
