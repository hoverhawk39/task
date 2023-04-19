import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

const SignUpButton = styled(Button)(({}) => ({
  color: "#000000",
  backgroundColor: "#FFFFFF",
  border: "1px solid #3C71FF",
  borderRadius: "4px",
  fontSize: "13px",
  fontFamily: "Interstate",
  textTransform: "none",
  width: "191px",
  height: "48px",
  lineHeight: "48px",
  padding: "16px 26px 16px 12px",
  "&:hover": {
    backgroundColor: "#3C71FF",
    boxShadow: "0px 6px 15px rgba(60, 113, 255, 0.4);",
    color: "#FFFFFF",
    "& .MuiButton-startIcon": {
      color: "#FFFFFF",
    },
  },
  "& .MuiButton-startIcon": {
    color: "#3C71FF",
  },
}));

export const GoogleBtn = () => {
  return (
    <SignUpButton
      startIcon={
        <GoogleIcon style={{ fontSize: "16px" }} disableripple="true" />
      }
    >
      Sign up with Google
    </SignUpButton>
  );
};

export const FacebookBtn = () => {
  return (
    <SignUpButton
      startIcon={
        <FacebookIcon style={{ fontSize: "18px" }} disableripple="true" />
      }
    >
      Sign up with Google
    </SignUpButton>
  );
};
