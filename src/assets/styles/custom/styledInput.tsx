"use client";
import { styled } from "@mui/material/styles";
import { InputBase, InputBaseProps } from "@mui/material";

const CustomInput = styled(InputBase)<InputBaseProps>(({ theme }) => ({
  borderRadius: 8,
  position: "relative",
  backgroundColor: "#F6F7F9",
  border: "1px solid",
  borderColor: "#E7EAEE",
  color: "#60686C",
  fontSize: 16,
  fontWeight: "500",
  height: "48px",
  padding: "0px 12px",
  transition: theme.transitions.create([
    "border-color",
    "background-color",
    "box-shadow",
  ]),
  "&:focus": {
    borderColor: "#f1b11d",
  },
}));

export default CustomInput;
