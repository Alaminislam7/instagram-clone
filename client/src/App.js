import React from 'react';
import "./App.css"
import NavBar from './components/Navbar';
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import Signin from './components/screens/Login'
import Signup from './components/screens/Signup'
import { BrowserRouter, Route } from 'react-router-dom'
import CreatePost from './components/screens/CreatePost';



function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/signin">
        <Signin/>
      </Route>
      <Route exact path="/signup">
        <Signup/>
      </Route>
      <Route exact path="/profile">
        <Profile/>
      </Route>
      <Route exact path="/create">
        <CreatePost/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
