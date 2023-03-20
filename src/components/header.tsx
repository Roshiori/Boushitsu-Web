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
import TwitterIcon from "@mui/icons-material/Twitter";
import { Drawer, SwipeableDrawer, Stack } from "@mui/material";

//Components

//useContext
import { ContextButton } from "./Layout";

const Header = () => {
  const { drawer, setDrawer } = useContext(ContextButton);

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
                marginLeft: "40px",
              }}
            >
              静岡大学 ITソルーション室
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                onClick={() => setDrawer(!drawer)}
                size="large"
                aria-label="sidebar"
                aria-controls="menu-appbar"
                aria-haspopup="true"
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
            <a
              href="https://twitter.com/Shizuoka_ITS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton
                sx={{ marginRight: { xs: "12px", md: "40px" }, color: "white" }}
              >
                <TwitterIcon />
              </IconButton>
            </a>
          </Toolbar>
        </AppBar>
      </header>
    </>
  );
};
export default Header;
