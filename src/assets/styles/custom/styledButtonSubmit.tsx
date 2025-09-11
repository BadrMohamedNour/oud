"use client";
import { styled } from "@mui/material/styles";
import { Button, ButtonProps } from "@mui/material";

const CustomButtonSubmit = styled(Button)<ButtonProps>(() => ({
  height: "48px",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  backgroundColor: "#341547",
  fontFamily: "var(--font-ExpoArabic)",
  fontWeight: "500",
  color: "#ffff",
  ":hover": {
    backgroundColor: "#4B1E66",
  },
  ":active": {
    backgroundColor: "#250F33",
  },
  ":disabled": {
    backgroundColor: "#C6C6C6",
  },
}));

export default CustomButtonSubmit;
