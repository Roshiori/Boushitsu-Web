import React from "react";
import { Box } from "@mui/system";

import ContentBox from "@/components/contentbox";

import Styles from "../styles/Content.module.css";
import Meta from "./_meta";

const About = () => {
  return (
    <>
      <Meta title="ITソルーション室とは" />
      <div className={Styles.wrapper}>
        <Box>
          <ContentBox>
            <h2 className={Styles.heading}>ITソルーション室とは</h2>
            <p>てすと</p>
          </ContentBox>
        </Box>
      </div>
    </>
  );
};

export default About;
