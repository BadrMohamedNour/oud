"use client";
import { styled } from "@mui/material/styles";
import { Button, ButtonProps } from "@mui/material";

const CustomButtonTag = styled(Button)<ButtonProps>(() => ({
  border: "1px solid transparent",
  borderRadius: "8px",
  backgroundColor: "#e7eaee",
  textWrap: "nowrap",
  color: "#000000",
  "&:hover": {
    borderColor: "#b4c0d1",
  },
  "&:active , &.active": {
    backgroundColor: "#ffff",
    borderColor: "#F1B11D",
    color: "#F1B11D",
  },
}));

export default CustomButtonTag;
