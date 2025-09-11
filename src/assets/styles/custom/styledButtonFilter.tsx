"use client";
import { styled } from "@mui/material/styles";
import { Button, ButtonProps } from "@mui/material";

const CustomButtonFilter = styled(Button)<ButtonProps>(() => ({
  border: "1px solid transparent",
  borderRadius: "8px",
  backgroundColor: "#e7eaee",
  textWrap: "nowrap",
  color: "#000000",
  "&:hover": {
    borderColor: "#F1B11D",
    color: "#F1B11D",
    backgroundColor: "#ffff",
  },
  "&:active , &.active": {
    backgroundColor: "#F5D893",
    color: "#1A1C1D",
  },
}));

export default CustomButtonFilter;
