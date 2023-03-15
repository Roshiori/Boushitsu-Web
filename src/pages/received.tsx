import React from "react";
import { Box } from "@mui/system";

import Styles from "../styles/Content.module.css";

import Meta from "./_meta";
import ContentBox from "@/components/contentbox";

const Received = () => {
  return (
    <>
      <Meta title="お問い合わせを受け付けました" />
      <div className={Styles.wrapper}>
        <ContentBox>
          <Box>
            <h3>ありがとうございます. 送信されました. </h3>
            <p>通常3日以内にご記入のメールアドレスに担当者からご連絡させていただきます. </p>
          </Box>
        </ContentBox>
      </div>
    </>
  );
};

export default Received;
