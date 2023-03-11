import React from "react";
import { Box } from "@mui/system";

type Children = {
  children: React.ReactNode;
}

const ContentBox = ({ children }: Children) => {
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
        { children }
      </Box>
    </>
  );
};

export default ContentBox;
