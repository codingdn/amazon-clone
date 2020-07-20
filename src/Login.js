import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

export default function Login() {
    const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const login = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((auth) =>{
        //logged in, redirect to home page
        history.push("/");
    }). catch(e=> alert(e.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((auth) =>{
        //create a user, redirect to homepage
        history.push("/");
    }).catch(e=> alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon login"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
          <h5>Password</h5>
          <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
          <button type="submit" onClick={login} className="login__signInButton">
            Sign In
          </button>
        </form>

        <p>
          By continuing, you agree to Amazon's{" "}
          <a
            className="login__links"
            href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=508088"
          >
            Conditions of Use
          </a>{" "}
          and{" "}
          <a
            className="login__links"
            href="https://www.amazon.com/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=468496"
          >
            Privacy Notice
          </a>
          .
        </p>

        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}
