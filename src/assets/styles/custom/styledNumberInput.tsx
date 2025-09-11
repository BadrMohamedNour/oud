"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import {
  Unstable_NumberInput as BaseNumberInput,
  NumberInputProps,
} from "@mui/base/Unstable_NumberInput";
import { styled } from "@mui/system";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const NumberInput = React.forwardRef(function CustomNumberInput(
  props: NumberInputProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <Box
      sx={{
        border: "1px solid #e7eaee",
        borderRadius: "8px",
        width: "100%",
        padding: "8px 6px",
        height: {
          xs: "44px",
          md: "48px",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&:hover": {
          borderColor: "#f1b11d",
        },
      }}
    >
      <BaseNumberInput
        slots={{
          root: StyledInputRoot,
          input: StyledInput,
          incrementButton: StyledButton,
          decrementButton: StyledButton,
        }}
        slotProps={{
          incrementButton: {
            children: <AddIcon fontSize="small" />,
            className: "increment",
          },
          decrementButton: {
            children: <RemoveIcon fontSize="small" />,
          },
        }}
        readOnly
        style={{
          width: "100%",
          justifyContent: "space-between",
        }}
        {...props}
        ref={ref}
      />
    </Box>
  );
});

export default NumberInput;

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const StyledInputRoot = styled("div")(
  () => `
  font-weight: 500;
  color: #1A1C1D;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`,
);

const StyledInput = styled("input")(
  ({ theme }) => `
  font-family: var(--font-ExpoArabic);
  font-size: 20px;
  font-weight: 500;
  line-height: 1.375;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  border: none;
  border-radius: 8px;
  outline: 0;
  min-width: 0;
  width: 4rem;
  text-align: center;

  &:focus-visible {
    outline: 0;
  }
`,
);

const StyledButton = styled("button")(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  line-height: 1.5;
  border: 1px solid transparent;
  border-radius: 8px;
  background: #F6F7F9;
  color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
  width: 32px;
  height: 32px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    cursor: pointer;
    border-color: #b4c0d1;
  }

  &:focus-visible {
    outline: 0;
    
  }
  &:active {
    background: #b4c0d1;
  }

  &.increment {
    order: 1;
  }
`,
);
