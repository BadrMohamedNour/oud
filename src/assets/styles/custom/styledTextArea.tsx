"use client";
import {
  TextareaAutosize as BaseTextareaAutosize,
  TextareaAutosizeProps,
} from "@mui/base/TextareaAutosize";
import { styled } from "@mui/material/styles";

const CustomTextarea = styled(BaseTextareaAutosize)<TextareaAutosizeProps>(
  ({ theme }) => ({
    borderRadius: 8,
    position: "relative",
    backgroundColor: "#F6F7F9",
    border: "1px solid",
    borderColor: "#E7EAEE",
    color: "#60686C",
    fontSize: 16,
    fontWeight: "500",
    padding: "12px",
    fontFamily: "var(--font-ExpoArabic)",
    resize: "none",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      borderColor: "#f1b11d",
    },
    // firefox
    "&:focus-visible": {
      outline: 0,
    },
  }),
);

export default CustomTextarea;
