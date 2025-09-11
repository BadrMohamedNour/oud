"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["var(--font-ExpoArabic)", "Cairo", "sans-serif"].join(","),
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          border: "1px solid #e7eaee",
          boxShadow: "none",
        },
        root: {
          "& .MuiList-root": {
            padding: "0px",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          "& .Mui-selected": {
            backgroundColor: "#F4EBF9 !important",
          },
        },
      },
    },
  },
});

export default theme;
