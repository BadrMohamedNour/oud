"use client";
import { Select, SelectProps } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomSelect = styled(Select)<SelectProps>(() => ({
  height: "48px",
  maxWidth: "160px",
  width: "fit-content",
  paddingRight: "10px",
  paddingLeft: "10px",
  border: "1px solid #e7eaee",
  borderRadius: "8px",
  fontWeight: "500",
  ":hover": {
    borderColor: "#f1b11d",
    backgroundColor: "#ffff",
  },
  "& svg": {
    width: "28px",
  },
  "& fieldset": {
    borderColor: "transparent !important",
  },
  "& .MuiOutlinedInput-input": {
    display: "flex",
    justifyContent: "start",
    padding: "0px !important",
    height: "100%",
    alignItems: "center",
  },
}));

export default CustomSelect;
