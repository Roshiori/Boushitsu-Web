import * as React from "react";
import { useState, useContext, createContext } from "react";
import Grid from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Drawer, SwipeableDrawer, Stack } from "@mui/material";

import Styles from "../styles/Home.module.css";

import Sidebar from "./sidebar";
import { Pages } from "@/pages/pages";
//Components

type drawerType = {
  drawer: boolean;
  setDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ContextButton = createContext<drawerType>({} as drawerType);

const Header = () => {
  const [drawer, setDrawer] = useState(false);

  const openDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <>
      <header>
        <AppBar position="static" color="primary" elevation={0}>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                flexGrow: 1,
                letterSpacing: ".1rem",
                fontWeight: "700",
                color: "inherit",
                textDecoration: "none",
                marginLeft: "40px"
              }}
            >
              静岡大学 ITソルーション室
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={openDrawer}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".1rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              静岡大学 ITソルーション室
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
      <Stack direction="row" spacing={0} sx={{}} className={Styles.main}>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Sidebar />
        </Box>
        <Pages />
      </Stack>
      <SwipeableDrawer
        anchor="left"
        open={drawer == true}
        onOpen={openDrawer}
        onClose={openDrawer}
      >
        <ContextButton.Provider value={{ drawer, setDrawer }}>
          <Sidebar />
        </ContextButton.Provider>
      </SwipeableDrawer>
    </>
  );
};
export default Header;
