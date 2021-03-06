import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messenger/Messenger";
import Landing from "./components/landingPage/Landing";
import Services from "./components/landingPage/Services";
import About from "./components/landingPage/About";
import Contact from "./components/landingPage/Contact";
import Dummy from "./components/dummy";
import ChatSystem from "./components/ChatSystem/ChatSystem";
import ChatButton from "./components/ChatSystem/ChatButton";

function App() {
  const { user } = useContext(AuthContext);
  // console.log(user)
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Landing />}
        </Route>
        {/* <Route path="/login"> <Login /></Route> */}
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/messenger">
          {!user ? <Redirect to="/" /> : <Messenger />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
       {/* <Route exact path="/" component={Home} /> */}
			<Route exact path="/services" component={Services} />
			<Route exact path="/about" component={About} />
			<Route exact path="/contact" component={Contact} />
      <Route exact path="/dummy" component={Dummy} />
			<Route exact path="/TestChat" component={ChatSystem}/>
      <Route exact path="/TestButton" component={ChatButton}/>
      </Switch>
    </Router>
  );
}

export default App;
