import React from "react";
import "./HeaderOption.css";

function HeaderOption({ Avatar, Icon, title, onClick, ProfileIcon }) {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {Avatar && <Avatar />}
      {ProfileIcon && (
        <div className="headerOption__profile">
          <h3 className="headerOption__title">{title}</h3>
          <ProfileIcon />
        </div>
      )}
      <h3 className="headerOption__title">{title != "Me" ? title : ""}</h3>
    </div>
  );
}

export default HeaderOption;
