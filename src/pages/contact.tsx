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
            <h2 className={Styles.heading}>お問い合わせ</h2>
            <p>ITソルーション室に関する質問や, 入室希望のご連絡等を受け付けています. 入力いただいたメールアドレスに, 通常3日以内にご連絡させていただきます. </p>
            <Form />
          </Box>
        </ContentBox>
      </div>
    </>
  );
};

export default Contact;
