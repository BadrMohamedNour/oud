import { Box, Stack, Skeleton, Grid, Button } from "@mui/material";
import SvgArrowLongLeft from "../svg/arrowLongLeft";

function OrderCardSkeleton() {
  return (
    <Stack bgcolor={"#FCFCFD"} padding={"10px"} borderRadius={"5px"}>
      <Box display={"flex"}>
        {/* order image */}
        <Skeleton
          variant="rounded"
          sx={{
            borderRadius: "4px",
            height: {
              xs: "100px",
              md: "188px",
            },
            maxWidth: {
              xs: "100px",
              md: "188px",
            },
            width: "100%",
            marginLeft: "10px",
          }}
        />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          flexDirection={{
            xs: "column",
            lg: "row",
          }}
          width={"100%"}
        >
          {/* order details */}
          <Stack
            marginTop={{
              xs: "0",
              lg: "20px",
            }}
          >
            <Skeleton
              variant="rounded"
              sx={{
                width: "100px",
                height: "28px",
                bgcolor: "#E7EAEE",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50px",
                marginBottom: {
                  xs: "5px",
                  md: "20px",
                },
              }}
            />

            <Skeleton
              variant="text"
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
                fontSize: "10px",
                width: "40px",
              }}
            />
            <Skeleton
              variant="text"
              sx={{ fontSize: "16px", width: "120px" }}
            />
            <Skeleton
              variant="text"
              sx={{
                fontSize: "16px",
                display: {
                  xs: "none",
                  lg: "flex",
                },
              }}
            />
            <Box
              display={{
                xs: "none",
                md: "flex",
              }}
              alignItems={"center"}
              marginTop={"10px"}
              gap={"10px"}
            >
              <Skeleton
                width={"90px"}
                variant="text"
                sx={{ fontSize: "20px" }}
              />
              <Skeleton
                width={"60px"}
                variant="text"
                sx={{ fontSize: "20px" }}
              />
            </Box>
          </Stack>
          <Stack maxWidth={"295px"} width={"100%"} marginTop={"20px"}>
            {/* odrer address */}
            <Box
              display={{
                xs: "none",
                md: "initial",
              }}
            >
              <Skeleton variant="text" sx={{ fontSize: "15px" }} />
              <Skeleton variant="text" sx={{ fontSize: "15px" }} />
              <Skeleton variant="text" sx={{ fontSize: "15px" }} />
            </Box>
            <Box
              display={{
                xs: "none",
                md: "flex",
              }}
              marginTop={{
                xs: "0px",
                sm: "15px",
                lg: "25px",
              }}
              gap={"10px"}
            >
              {/* order actions desktop */}
              <OrderActions />
            </Box>
          </Stack>
          {/* product details desktop */}
          <Box
            alignSelf={"center"}
            display={{
              xs: "none",
              lg: "flex",
            }}
          >
            <ProductDetails />
          </Box>
        </Box>
        {/* product details mobile */}
        <Box
          display={{
            xs: "flex",
            lg: "none",
          }}
          alignItems={"center"}
        >
          <ProductDetails />
        </Box>
      </Box>
      <Box
        marginTop={"15px"}
        gap={"10px"}
        display={{
          xs: "flex",
          md: "none",
        }}
      >
        {/* order actions mobile */}
        <OrderActions />
      </Box>
    </Stack>
  );
}

const OrderActions = () => {
  return (
    <Grid container gap={"15px"}>
      <Grid item xs={"auto"} flex={1}>
        <Skeleton
          variant="rounded"
          sx={{
            paddingX: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: "70px",
            width: {
              xs: "100%",
              md: "initial",
            },
            height: {
              xs: "44px",
              md: "48px",
            },
          }}
        />
      </Grid>
      <Grid item xs={"auto"} flex={1}>
        <Skeleton
          variant="rounded"
          sx={{
            paddingX: "20px",
            minWidth: "70px",
            width: {
              xs: "100%",
              md: "initial",
            },
            height: {
              xs: "44px",
              md: "48px",
            },
          }}
        />
      </Grid>
      <Grid item xs={"auto"} flex={1}>
        <Skeleton
          variant="rounded"
          sx={{
            paddingX: "20px",
            minWidth: "70px",
            width: {
              xs: "100%",
              md: "initial",
            },
            height: {
              xs: "44px",
              md: "48px",
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

const ProductDetails = () => {
  return (
    <Button>
      <SvgArrowLongLeft />
    </Button>
  );
};

export default OrderCardSkeleton;
