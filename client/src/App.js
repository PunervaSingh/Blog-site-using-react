import React, { useContext } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Profile from "./pages/profile/profile";
import Forgot from "./pages/forgot_password/Forgot";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import {Context} from "./context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          {user ? <About /> : <About />}
        </Route>
        <Route path="/contact">
          {user ? <Contact /> : <Contact />}
        </Route>
        <Route path="/register">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/write">
          {user ? <Write /> : <Login />}
        </Route>
        <Route path="/forgot">
          {user ? <Forgot /> : <Forgot />}
        </Route>
        <Route path="/settings">
        {user ? <Settings /> : <Register />}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
        <Route path="/profile/">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;