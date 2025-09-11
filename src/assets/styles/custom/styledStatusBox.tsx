"use client";
import { styled } from "@mui/material/styles";
import { Box, BoxProps } from "@mui/material";

const StatusBox = styled(Box)<BoxProps>(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#ffffff",
  borderRadius: "160px",
  maxWidth: "fit-content",
  width: "100%",
  padding: "0px 10px",
  height: "32px",
}));

export default StatusBox;
