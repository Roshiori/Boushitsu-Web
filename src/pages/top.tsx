import React from "react";
import { Box } from "@mui/system";

import ContentBox from "@/components/contentbox";

import Styles from "../styles/Content.module.css";
import Meta from "./_meta";
import Image from "next/image";

export const Top = () => {
  return (
    <>
      <Meta title="トップ" />
      <div className={Styles.wrapper}>
        <Box>
          <Box sx = {{textAlign: "center",}}>
            <Image
              src="/images/boushitsu.png"
              alt="boushitsu"
              width={2560}
              height={1080}
              sizes="100vw"
              style={{
                width: "75vw",
                height: "auto",
                borderRadius: "15px",
                marginTop: "20px"
              }}
            />
          </Box>
          <ContentBox>
            <p>とっぷ</p>
          </ContentBox>
        </Box>
      </div>
    </>
  );
};
