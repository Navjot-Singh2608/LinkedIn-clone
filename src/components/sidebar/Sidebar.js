import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Sidebar.css";
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://static-cse.canva.com/blob/140234/Rainbow-Gradient-Pink-and-Purple-Zoom-Virtual-Background.png"
          alt=""
        />
        <AccountCircleIcon className="sidebar__avatar" />

        <h2>{user ? user.displayName : "user"}</h2>
        <h4>{user ? user.email : "user@gmail.com"}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,448</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        Recent
        {recentItem("design")}
        {recentItem("developer")}
        {recentItem("travel")}
        {recentItem("blogs")}
        {recentItem("countries")}
      </div>
    </div>
  );
}

export default Sidebar;
