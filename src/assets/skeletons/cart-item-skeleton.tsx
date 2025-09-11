import { Box, Grid, Skeleton } from "@mui/material";

const CartItemSkelton = () => {
  return (
    <Box
      display={"flex"}
      sx={{ backgroundColor: "#FCFCFD" }}
      paddingLeft={"32px"}
      paddingRight={"10px"}
      paddingY={"5px"}
    >
      <Box>
        <Box marginLeft={"15px"} width={104} height={104}>
          <Skeleton variant="rounded" width={104} height={104} />
        </Box>
      </Box>

      <Grid container spacing={1} columns={12} justifyContent={"space-between"}>
        <Grid container item sm={12} xs={12} md={12} lg={"auto"} xl={"auto"}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Skeleton
              variant="text"
              sx={{
                fontSize: "14px",
                width: "40%",
              }}
            />
            <Skeleton
              sx={{
                fontSize: "14px",
                width: "140px",
              }}
            />
          </Box>
        </Grid>
        <Grid
          container
          item
          sm={12}
          xs={12}
          md={"auto"}
          display={{
            xs: "flex",
            md: "none",
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Skeleton
              variant="text"
              sx={{
                fontSize: "12px",
                width: "40%",
              }}
            />
            <Skeleton
              variant="text"
              sx={{
                fontSize: "14px",
                width: "80px",
              }}
            />
          </Box>
        </Grid>

        <Grid container item xs={"auto"}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Skeleton
              variant="text"
              sx={{
                fontSize: {
                  xs: "12px",
                  md: "14px",
                },
                display: {
                  xs: "none",
                  lg: "flex",
                },
                fontWeight: "300",
                color: "#60686C",
                marginBottom: "5px",
                width: "40%",
              }}
            />
            <Skeleton
              variant="rounded"
              sx={{
                width: "80px",
                height: { xs: "44px", md: "48px" },
              }}
            />
          </Box>
        </Grid>

        <Grid
          container
          item
          xs={"auto"}
          display={{
            xs: "none",
            md: "flex",
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Skeleton
              variant="text"
              sx={{
                fontSize: "12px",
                width: "40%",
                marginBottom: "3px",
              }}
            />
            <Skeleton
              variant="text"
              sx={{
                fontSize: "12px",
                width: "80px",
              }}
            />
          </Box>
        </Grid>
        <Grid container item xs={"auto"}>
          <Box
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Skeleton
              variant="rounded"
              sx={{
                width: {
                  xs: "44px",
                  md: "48px",
                },
                height: {
                  xs: "44px",
                  md: "48px",
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartItemSkelton;
