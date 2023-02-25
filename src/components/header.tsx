import * as React from "react";
import { useState } from "react";
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
import AdbIcon from "@mui/icons-material/Adb";
import { Drawer, SwipeableDrawer, Stack } from "@mui/material";

import Styles from "../styles/Home.module.css"

import Sidebar from "./sidebar";
import { Pages } from "@/pages/pages";
//Components

const pages = ["about ITS", "hoge", "fuga"];

const Header = () => {
  const [drawer, setDrawer] = useState(false);

  const openDrawer = () => {
    setDrawer(!drawer);
    if (drawer == true) {
      console.log("つるー");
    } else if (drawer == false) {
      console.log("ふぉるす");
    }
  };

  return (
    <>
      <header>
        <AppBar position="static" color="primary" elevation={0}>
          <Container>
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
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                ITSolution
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
              <Typography>{drawer ? "true" : "false"}</Typography>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                ITSolution
              </Typography>
            </Toolbar>
          </Container>
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
        <Sidebar />
      </SwipeableDrawer>
    </>
  );
};
export default Header;
