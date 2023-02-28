import { BottomNavigation, Box, Typography } from "@mui/material";

import Styles from "../styles/Footer.module.css";

const yearnum: number = new Date().getFullYear();
const year: string = yearnum.toString();

const copyrightString = () => {
  const copyright: string =
    "©" + year + " " + "静岡大学 ITソルーション室. All Rights Reserved.";
  return copyright;
};

const Footer = () => {
  return (
    <>
      <footer className={Styles.footer}>
        <Box sx={{ color: "white", backgroundColor: "info.main" }}>
          <Typography variant="body1" className={Styles.footerText}>
            {copyrightString()}
          </Typography>
        </Box>
      </footer>
    </>
  );
};

export default Footer;
