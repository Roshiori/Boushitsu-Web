import React from "react";
import { Box } from "@mui/system";

type Props = {
  content: JSX.Element
}

const ContentBox = (props: Props) => {
  const { content } = props;
  return (
    <>
      <Box
        sx={{
          marginLeft: "20px",
          marginRight: "20px",
          marginTop: "20px",
          marginBottom: "20px",
          paddingLeft: "30px",
          paddingRight: "30px",
          paddingTop: "30px",
          paddingBottom: "30px",
          backgroundColor: "white",
        }}
      >
        { content }
      </Box>
    </>
  );
};

export default ContentBox;
