import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { auth } from "../../firebase";
import { useHistory } from "react-router-dom";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profilepic, setProfilePic] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let history = useHistory();

  const loginToApp = () => {
    history.push("login");
  };

  const register = (e) => {
    e.preventDefault();
    if (!name) {
      return alert("Please enter the full name!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilepic
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilepic
              })
            );
            history.push("/");
          });
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="register__container">
      <div className="register">
        <img
          src="https://news.wlth.com.au/hubfs/580b57fcd9996e24bc43c528.png"
          alt=""
        />
        <form>
          <input
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
          />
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

          <button type="submit" onClick={register}>
            Sign Up
          </button>
        </form>
        <p>
          Not a member?{" "}
          <span className="login__register" onClick={loginToApp}>
            Login Now
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
