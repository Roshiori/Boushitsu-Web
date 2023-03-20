import React from "react";
import { Box } from "@mui/system";

import ContentBox from "@/components/contentbox";

import Styles from "../styles/Content.module.css";
import Meta from "./_meta";

const NotFoundError = () => {
  return (
    <>
    <Meta title = "404 Error" />
      <div className={Styles.wrapper}>
        <Box>
          <ContentBox>
            <p>404 Not Found</p>
          </ContentBox>
        </Box>
      </div>
    </>
  );
};

export default NotFoundError;
