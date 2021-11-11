import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useHistory } from "react-router";
import backgroundImg from "../login/login-back.jpg";


export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login" style={{ backgroundImage: `url(${backgroundImg})`}}>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Codination {"</>"}</h3>
          <span className="loginDesc">
          Connect with coders around the world and find guidance at your finger-tips.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick} style={{ backgroundColor: 'rgb(71,71,71)'}}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Re-Enter Password"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton" onClick={ () => history.push("/login")}>Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
