import { Box, Skeleton } from "@mui/material";

function ProductActionsSkeleton() {
  return (
    <>
      <Box
        sx={{
          marginTop: "15px",
        }}
      >
        <Skeleton
          variant="text"
          sx={{
            fontSize: {
              xs: "16px",
              md: "20px",
            },
            marginBottom: "15px",
            fontWeight: "500",
            color: "#1A1C1D",
            maxWidth: "80px",
          }}
        ></Skeleton>
        <Box
          display={"grid"}
          gap={"12px"}
          gridTemplateColumns={"repeat(3, 1fr)"}
          maxWidth={"330px"}
        >
          {[1, 2, 3].map((index) => (
            <Skeleton
              key={index}
              variant="rounded"
              sx={{
                maxWidth: "102px",
                width: "100%",
                height: { xs: "44px", md: "48px" },
              }}
            ></Skeleton>
          ))}
        </Box>
      </Box>
      {/* line */}
      <Box
        sx={{
          height: "1px",
          backgroundColor: "#E7EAEE",
          margin: "30px 0",
        }}
      />
      {/* end line */}

      <Box
        display={"flex"}
        flexDirection={{
          xs: "column-reverse",
          lg: "row",
        }}
      >
        <Skeleton
          variant="rounded"
          sx={{
            maxWidth: {
              xs: "100%",
              lg: "304px",
            },
            width: "100%",
            height: { xs: "44px", md: "48px" },
            marginLeft: {
              xs: "0px",
              sm: "25px",
            },
          }}
        ></Skeleton>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={{
            xs: "space-between",
            lg: "flex-start",
          }}
          gap={{
            xs: "20px",
            lg: "0",
          }}
          marginBottom={{
            xs: "25px",
            lg: "0px",
          }}
        >
          {/* favorite */}
          {/* <Skeleton
            variant="rounded"
            sx={{
              width: "85px",
              flex: "1",
              height: { xs: "44px", md: "48px" },
              alignItems: "center",
              justifyContent: "center",
              marginLeft: {
                xs: "0",
                lg: "25px",
              },
            }}
          /> */}
          <Skeleton
            variant="text"
            width={"85px"}
            sx={{
              display: {
                xs: "block",
                lg: "none",
              },
            }}
          />
          <Skeleton
            variant="rounded"
            width={"140px"}
            sx={{
              padding: "8px 6px",
              height: {
                xs: "44px",
                md: "48px",
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default ProductActionsSkeleton;
