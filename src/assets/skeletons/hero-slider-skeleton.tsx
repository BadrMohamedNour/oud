import Box from "@mui/material/Box";

function HeroSliderSkeleton() {
  return (
    <Box
      component={Box}
      sx={{
        width: "100%",
        height: {
          xs: "130px",
          md: "300px",
        },
        backgroundColor: "#e8eaee",
      }}
    ></Box>
  );
}

export default HeroSliderSkeleton;
