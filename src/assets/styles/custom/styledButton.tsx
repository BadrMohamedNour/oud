"use client";
import { styled } from "@mui/material/styles";
import { Button, ButtonProps } from "@mui/material";

const CustomButton = styled(Button)<ButtonProps>(() => ({
  border: "1px solid #e7eaee",
  borderRadius: "8px",
  ":hover": {
    borderColor: "#f1b11d",
    backgroundColor: "#ffff",
  },
  ":active": {
    backgroundColor: "#f1b11d",
  },
  "&:active *": {
    color: "#ffff",
    stroke: "#ffff",
  },
}));

export default CustomButton;
