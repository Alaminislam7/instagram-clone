import React, { createContext, useContext, useEffect, useReducer } from 'react';
import "./App.css"
import NavBar from './components/Navbar';
import Home from './components/screens/Home'
import Profile from './components/screens/Profile'
import Signin from './components/screens/Login'
import Signup from './components/screens/Signup'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import CreatePost from './components/screens/CreatePost';
import { initialState, reducer } from './reducers/userReducer';
export const UserContext = createContext()


const Routing = () => {
  const history = useHistory()
  const { state, dispatch } = useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      dispatch({ type: "USER", payload: user })
    } else {
      // if (!history.location.pathname.startsWith('/reset'))
      //   history.push('/signin')
      history.push('/signin')
    }
  }, [])

  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signin">
        <Signin />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/create">
        <CreatePost />
      </Route>
    </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <NavBar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider >
  );
}

export default App;
