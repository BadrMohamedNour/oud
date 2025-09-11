import { Typography, Box } from "@mui/material";
// import offers from "@/data/offers.json";
export default function Tagline() {
  return (
    <Box
      sx={{
        paddingTop: {
          xs: "10px",
          md: "12px",
        },
        paddingBottom: {
          xs: "10px",
          md: "12px",
        },
        backgroundColor: "#f5d893",
      }}
    >
      <Typography
        align="center"
        sx={{
          fontSize: 14,
          fontWeight: 700,
          color: "#1A1C1D",
        }}
      >
        {/* {offers.title} */}
      </Typography>
    </Box>
  );
}
