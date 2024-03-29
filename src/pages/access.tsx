import React from "react";
import { Box } from "@mui/system";

import ContentBox from "@/components/contentbox";

import Styles from "../styles/Content.module.css";
import Meta from "./_meta";
import { Typography } from "@mui/material";
import Image from "next/image";

const Access = () => {
  return (
    <>
    <Meta title = "アクセス" />
    <div className={Styles.wrapper}>
      <Box>
        <ContentBox>
        <h2 className={Styles.heading}>アクセス</h2>
        <h4>
          静岡大学 浜松キャンパス内 情報学部2号館 1階西側エレベーターホール前
        </h4>
        <h4>静岡県浜松市中区城北(じょうほく) 3-5-1</h4>
        <Image src = "/images/nishi_elevator.jpeg" alt = "西側エレベーター" width="400" height="300" />
        <Typography>浜松駅バスターミナル 15番/16番から出発するすべてのバスが「静岡大学」バス停に停車します。</Typography>
        <div className= {Styles.iframeWrapper}>
        <iframe
          className={Styles.iframe}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.1618868336454!2d137.71561841611592!3d34.72631358042787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601adefc69e55555%3A0xb267bd7e7b6481cc!2z6Z2Z5bKh5aSn5a2mIOaDheWgseWtpumDqCAy5Y-36aSo!5e0!3m2!1sja!2sjp!4v1678160463654!5m2!1sja!2sjp"
          frameBorder="none"
        ></iframe>
        </div>
        </ContentBox>
      </Box>
      </div>
    </>
  );
};

export default Access;
