import React from "react";
import { Box } from "@mui/system";

import ContentBox from "@/components/contentbox";

import Styles from "../styles/Content.module.css";

const About = () => {
  return (
    <>
      <div className={Styles.wrapper}>
        <Box>
          <ContentBox>
            <p>てすと</p>
          </ContentBox>
        </Box>
      </div>
    </>
  );
};

export default About;
