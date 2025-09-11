"use client";
import { styled } from "@mui/material/styles";
import Radio, { RadioProps } from "@mui/material/Radio";
import SvgRadioCheck from "@/assets/svg/radioCheck";
import SvgRadioCheckSquare from "@/assets/svg/radioCheckSquare";

interface Props extends RadioProps {
  shape?: string;
}

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 24,
  height: 24,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: "#fff",
}));

function BpRadio(props: Props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={
        props?.shape === "square" ? <SvgRadioCheckSquare /> : <SvgRadioCheck />
      }
      icon={
        <BpIcon
          sx={{ borderRadius: props?.shape === "square" ? "4px" : "50%" }}
        />
      }
      {...props}
    />
  );
}

export default BpRadio;
