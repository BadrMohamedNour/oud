"use client";
import { styled } from "@mui/material/styles";
import { Box, BoxProps } from "@mui/material";

const CustomBoxSubmit = styled(Box)<BoxProps>(() => ({
  height: "48px",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  backgroundColor: "#341547",
  fontFamily: "var(--font-ExpoArabic)",
  display: "flex",
  fontWeight: "500",
  color: "#ffff",
  ":hover": {
    backgroundColor: "#4B1E66",
  },
  ":active": {
    backgroundColor: "#250F33",
  },
}));

export default CustomBoxSubmit;
