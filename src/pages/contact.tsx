import React from "react";
import { Box } from "@mui/system";

import ContentBox from "@/components/contentbox";

import Meta from "./_meta";

import Styles from "../styles/Content.module.css";

import { Form } from "@/components/form";
import { Typography } from "@mui/material";

const Contact = () => {
  return (
    <>
      <Meta title="お問い合わせ" />
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
