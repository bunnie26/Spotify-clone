import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryIconIcon from "@material-ui/icons/LibraryMusic";

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        className="sidebar__logo"
      />
      <SidebarOption icon = {HomeIcon}title="Home" />
      <SidebarOption icon = {SearchIcon} title="Search" />
      <SidebarOption icon = {LibraryIconIcon} title="Your Library" />
    </div>
  );
}

export default Sidebar;
