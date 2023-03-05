import React, { ReactElement, ReactNode, useMemo } from "react";
import { useState, useContext, createContext } from "react";

import { Box } from "@mui/system";
import { Stack } from "@mui/system";
import { SwipeableDrawer } from "@mui/material";

import Header from "./header";
import Sidebar from "./sidebar";
import Footer from "./footer";

import Styles from "../styles/Home.module.css";

type Children = {
    children: React.ReactNode;
}

type drawerType = {
  drawer: boolean;
  setDrawer: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ContextButton = createContext<drawerType>({} as drawerType);

export const Layout = React.memo(({ children }: Children) => {
  const [drawer, setDrawer] = useState(false);

  const openDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <>
      <ContextButton.Provider value={{ drawer, setDrawer }}>
        <Header />
      </ContextButton.Provider>
      <Stack direction="row" spacing={0} sx={{}} className={Styles.main}>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Sidebar />
        </Box>
        {children}
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
      <Footer />
    </>
  );
}
);