import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../features/userSlice";
import { auth } from "../../firebase";
import "./Login.css";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilepic, setProfilePic] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let history = useHistory();

  const loginToApp = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoUrl
          })
        );
        history.push("/");
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    history.push("/register");
  };

  return (
    <div className="login__container">
      <div className="login">
        <img
          src="https://news.wlth.com.au/hubfs/580b57fcd9996e24bc43c528.png"
          alt=""
        />
        <form>
          {/* <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="name"
        />
        <input
          type="text"
          value={profilepic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="profile pic URL (optional)"
        /> */}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="user email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="user password"
          />

          <button type="submit" onClick={loginToApp}>
            Sign In
          </button>
        </form>
        <p>
          Not a member?{" "}
          <span className="login__register" onClick={register}>
            Register Now
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
