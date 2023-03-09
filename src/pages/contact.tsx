import React from "react";
import { Box } from "@mui/system";

import Styles from "../styles/Content.module.css";

import { Form } from "@/components/form";

const Contact = () => {
  return (
    <>
    <div className={Styles.wrapper}>
      <Box>
        <h2>お問い合わせ</h2>
        <Form />
      </Box>
      </div>
    </>
  );
};

export default Contact;
