"use client";
import { styled } from "@mui/material/styles";
import { Button, ButtonProps } from "@mui/material";

const CustomButtonFilterDialog = styled(Button)<ButtonProps>(() => ({
  height: "48px",
  width: "100%",
  border: "1px solid #e7eaee",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingRight: "15px",
  borderRadius: "8px",
  fontWeight: "500",
  ":hover": {
    borderColor: "#f1b11d",
    backgroundColor: "#ffff",
  },
}));

export default CustomButtonFilterDialog;
