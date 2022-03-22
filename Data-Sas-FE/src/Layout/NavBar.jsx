import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { useStyles } from "./styles";

const Paths = [
  {
    title: "Dashboard",
    icon: <img  src={"/images/DashboardIcon.png"} alt="logo" />,
    path: "/",
  },
  {
    title: "Yearly Insights",
    icon:  <img  src={"/images/InIcon.png"} alt="yearly-insights" />,
    path: "/yearly-insights",
  },
  {
    title: "Search",
    icon: <img  src={"/images/Search.png"} alt="business-search" />,
    path: "/business-search",
  },
  {
    title: "Saved Searches",
    icon: <img  src={"/images/SaveSearch.png"} alt="saved-searches" />,
    path: "/saved-searches",
  },
  {
    title: "User Saved List",
    icon: <img  src={"/images/SavedIcon.png"} alt="user-saved-list" />,
    path: "/user-saved-list",
  },
  {
    title: "Export list",
    icon: <img  src={"/images/ExportIcon.png"} alt="export-list" />,
    path: "/export-list",
  },
  {
    title: "Companies Note List",
    icon: <img  src={"/images/NotesIcon.png"} alt="company-note-list" />,
    path: "/company-note-list",
  },
  {
    title: "Watch",
    icon: <img  src={"/images/Watch.png"} alt="business-watch" />,
    path: "/watch",
  },
];

export default function NavBar() {
  const History = useHistory();
  const Location = useLocation();
  const classess = useStyles();
  const [activePath, setActivePath] = useState("/");

  return (
    <List className={classess.navMaintop}>
      {Paths.map((path, index) => {
        return (
          <ListItem
            button
            className={Location.pathname === path.path ? classess.active : null}
            key={index}
            onClick={() => {
              setActivePath(path.path);
              History.push(path.path);
            }}>
            <ListItemIcon
              className={classess.icon}>
              {path.icon}
            </ListItemIcon>   
            <ListItemText primary={path.title} className={classess.navTitle} />
          </ListItem>
        );
      })}
    </List>
  );
}
