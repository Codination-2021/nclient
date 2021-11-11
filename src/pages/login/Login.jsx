import { useContext, useRef } from "react";
import "../login/userlogin.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router";
import backgroundImg from "../login/login-back.jpg";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login" style={{ backgroundImage: `url(${backgroundImg})`}}>
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Codination {"</>"}</h3>
          <span className="loginDesc" style={{ color: 'rgb(252, 81, 69)'}}>
            Connect with coders around the world and find guidance at your finger-tips.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick} style={{ backgroundColor: 'rgb(71,71,71)'}}>
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton" onClick={() => history.push("/register")}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
