"use client";
import { styled } from "@mui/material/styles";
import { FormControlLabel, FormControlLabelProps } from "@mui/material";

const CustomFormControlLabel = styled(FormControlLabel)<FormControlLabelProps>(() => ({
    margin: "0",
    height: "48px",
    width: "100%",
    padding: "0",
    borderRadius: "4px",
    marginBottom: "8px",
}));

export default CustomFormControlLabel;
