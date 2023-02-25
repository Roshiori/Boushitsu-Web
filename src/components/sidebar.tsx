import React, {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { width } from "@mui/system";

//const [isOpen, setIsOoen] = React.useState(false);

const Sidebar = () => {
  const drawerWidth = 240;

  return (
    <>
      <Box
        sx={{
          color: "white",
          backgroundColor: "text.primary",
          width: drawerWidth,
          height: "100vh"
        }}
      >
        <Box sx={{display: {xs:"flex", md:"none"}}}>
          <p>スマホ用</p>
        </Box>
        <List>
          <ListItemButton>
            <MailIcon />
            <ListItemText>これがリストアイテム</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <MailIcon />
            <ListItemText>これがリストアイテム</ListItemText>
          </ListItemButton>
          <ListItemButton>
            <MailIcon />
            <ListItemText>これがリストアイテム</ListItemText>
          </ListItemButton>
        </List>
      </Box>
    </>
  );
};

export default Sidebar;
