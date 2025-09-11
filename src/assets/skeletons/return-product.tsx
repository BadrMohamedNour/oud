import { Box, Grid, Skeleton } from "@mui/material";

function ReturnProductCardSkeleton() {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      paddingX={"10px"}
      paddingY={"15px"}
      bgcolor={"#FCFCFD"}
      borderRadius={"8px"}
    >
      <Box
        width={"48px"}
        height={"48px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          marginLeft: {
            xs: "5px",
            md: "20px",
          },
        }}
      >
        <Skeleton
          sx={{
            margin: "0",
            height: "24px",
            width: "24px",
            padding: "0",
            borderRadius: "4px",
          }}
          variant="rounded"
        />
      </Box>
      <Box display={"flex"} width={"100%"} alignItems={"center"}>
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Grid item xs={"auto"} md={3}>
            <Skeleton
              variant="text"
              sx={{
                fontSize: "20px",
                width: {
                  xs: "80px",
                  md: "65%",
                },
              }}
            />
          </Grid>
          <Grid item xs={"auto"} md={2}>
            <Skeleton
              variant="text"
              sx={{
                fontSize: "10px",
                width: {
                  xs: "50px",
                  md: "50%",
                },
              }}
            />
            <Skeleton
              variant="text"
              sx={{
                fontSize: "14px",
                width: {
                  xs: "80px",
                  md: "65%",
                },
              }}
            />
          </Grid>
          <Grid item xs={"auto"} md={2}>
            <Box
              display={{
                xs: "none",
                md: "initial",
              }}
            >
              <Skeleton
                variant="text"
                sx={{
                  fontSize: "10px",
                  width: {
                    xs: "50px",
                    md: "50%",
                  },
                }}
              />
              <Skeleton
                variant="text"
                sx={{
                  fontSize: "14px",
                  width: {
                    xs: "80px",
                    md: "65%",
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={"auto"} md={2}>
            <Skeleton
              variant="text"
              sx={{
                fontSize: "10px",
                width: {
                  xs: "50px",
                  md: "50%",
                },
              }}
            />
            <Skeleton
              variant="text"
              sx={{
                fontSize: "14px",
                width: {
                  xs: "80px",
                  md: "65%",
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ReturnProductCardSkeleton;
