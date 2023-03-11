import React from "react";
import { Box } from "@mui/system";

import ContentBox from "@/components/contentbox";

import Styles from "../styles/Content.module.css";

import { Form } from "@/components/form";
import { Typography } from "@mui/material";

const Contact = () => {
  return (
    <>
      <div className={Styles.wrapper}>
        <ContentBox>
          <Box>
            <h2>お問い合わせ</h2>
            <Form />
          </Box>
        </ContentBox>
      </div>
    </>
  );
};

export default Contact;
