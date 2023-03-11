import React from "react";
import { Box } from "@mui/system";

import ContentBox from "@/components/contentbox";

import Styles from "../styles/Content.module.css"

const About = () => {
  return (
    <>
    <div className={Styles.wrapper}>
    <Box>
    <ContentBox content = {<p>てすと</p>} />
    </Box>
    </div>
    </>
  );
};

export default About;