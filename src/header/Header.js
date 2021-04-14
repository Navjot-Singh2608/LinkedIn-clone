import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import HeaderOption from "../headerOption/HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { logout, selectUser } from "../features/userSlice";
import { useHistory } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  let history = useHistory();
  const user = useSelector(selectUser);
  const [showProfileBar, setProfileBar] = useState(false);

  const logoutOfApp = (e) => {
    setProfileBar(false);
    dispatch(logout());
    auth.signOut();
    history.push("/login");
  };

  const home = (e) => {
    history.push("/");
  };

  const UserProfile = () => {
    if (!showProfileBar) {
      return "";
    } else {
      return (
        <div className="userProfileBar">
          <div className="userProfileBar__header">
            <AccountCircleIcon />{" "}
            <span className="userProfileBar__header__displayName">
              {user ? user.displayName : "user"} <p>Hello </p>
            </span>
          </div>
          <hr />
          <div className="userProfileBar__body">
            <h2>Account</h2>
            <span>{"Setting & Privacy"}</span>
            <span>Help</span>
            <span>Language</span>
          </div>
          <hr />
          <div className="userProfileBar__footer">
            <h2>Manage</h2>
            <span>{"Post & Activity"}</span>
            <span>Job Posting Account</span>
            <hr />
            <span className="signOut" onClick={logoutOfApp}>
              SignOut
            </span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://img.flaticon.com/icons/png/512/174/174857.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} onClick={home} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="My Network" />
        <HeaderOption Icon={NotificationsIcon} title="Home" />
        <HeaderOption
          Avatar={AccountCircleIcon}
          title="Me"
          onClick={(e) => setProfileBar(!showProfileBar)}
          ProfileIcon={ArrowDropDownIcon}
        />
        {showProfileBar && <UserProfile />}
      </div>
    </div>
  );
}

export default Header;
