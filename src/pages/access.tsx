import React from "react";
import { Box } from "@mui/system";

import ContentBox from "@/components/contentbox";

import Styles from "../styles/Content.module.css";

const Access = () => {
  return (
    <>
    <div className={Styles.wrapper}>
      <Box>
        <ContentBox>
        <h2>アクセス</h2>
        <h3>
          静岡大学 浜松キャンパス内 情報学部2号館 1階西側エレベーターホール前
        </h3>
        <h3>静岡県浜松市中区城北(じょうほく) 3-5-1</h3>
        <div className= {Styles.iframeWrapper}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.1618868336454!2d137.71561841611592!3d34.72631358042787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601adefc69e55555%3A0xb267bd7e7b6481cc!2z6Z2Z5bKh5aSn5a2mIOaDheWgseWtpumDqCAy5Y-36aSo!5e0!3m2!1sja!2sjp!4v1678160463654!5m2!1sja!2sjp"
          width="600"
          height="450"
          referrerPolicy="no-referrer-when-downgrade"
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
