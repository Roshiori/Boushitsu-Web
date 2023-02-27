import React, { useContext, useState } from "react";
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
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

//pages

//Icons
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PinDropIcon from "@mui/icons-material/PinDrop";
import MailIcon from "@mui/icons-material/Mail";

//useContext
import { ContextButton } from "./header";

const Sidebar = () => {
  const drawerWidth = 250;
  const { drawer, setDrawer } = useContext(ContextButton);

  return (
    <>
      <Box
        sx={{
          color: "white",
          backgroundColor: "text.primary",
          width: drawerWidth,
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            width: "64px",
            height: "64px",
          }}
        >
          <IconButton onClick={() => setDrawer(!drawer)}>
            <CloseIcon
              sx={{
                color: "white",
                width: "40px",
                height: "40px",
                alignItems: "center",
              }}
            />
          </IconButton>
        </Box>
        <List>
          <ListItemButton component = "a" href = "/">
            <ListItemIcon sx={{ color: "white" }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>ホーム</ListItemText>
          </ListItemButton>
          <ListItemButton component = "a" href="/about">
            <ListItemIcon sx={{ color: "white" }}>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText>ITソルーション室とは</ListItemText>
          </ListItemButton>
          <ListItemButton component = "a" href="/access">
            <ListItemIcon sx={{ color: "white" }}>
              <PinDropIcon />
            </ListItemIcon>
            <ListItemText>アクセス</ListItemText>
          </ListItemButton>
          <ListItemButton component = "a" href = "/contact">
            <ListItemIcon sx={{ color: "white" }}>
              <MailIcon />
            </ListItemIcon>
            <ListItemText>お問い合わせ</ListItemText>
          </ListItemButton>
        </List>
      </Box>
    </>
  );
};

export default Sidebar;
