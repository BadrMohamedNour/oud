import { Box, Skeleton } from "@mui/material";

function ProductDetailsSkeleton() {
  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginBottom={"20px"}
      >
        <Skeleton
          variant="text"
          width={"100px"}
          sx={{
            fontSize: {
              xs: "12px",
              md: "14px",
            },
            fontWeight: "300",
            color: "#60686C",
            marginLeft: "5px",
          }}
        ></Skeleton>
        <Box display={"flex"} gap={"5px"}>
          <Skeleton
            variant="rounded"
            sx={{
              borderRadius: 79 / 2,
              minWidth: {
                xs: "84px",
                md: "108px",
              },
              width: "100%",
              maxWidth: "fit-content",
              paddingX: "10px",
              height: {
                xs: "24px",
                md: "32px",
              },
            }}
          ></Skeleton>

          <Skeleton
            variant="rounded"
            sx={{
              borderRadius: 79 / 2,
              minWidth: {
                xs: "68px",
                md: "79px",
              },
              width: "100%",
              maxWidth: "fit-content",
              height: {
                xs: "24px",
                md: "32px",
              },
            }}
          ></Skeleton>
        </Box>
      </Box>
      <Skeleton
        variant="text"
        sx={{
          fontSize: {
            xs: "16px",
            md: "24px",
          },

          fontWeight: "300",
          color: "#484E51",
        }}
      ></Skeleton>
      <Skeleton
        variant="text"
        sx={{
          fontSize: {
            xs: "16px",
            md: "32px",
          },
          fontWeight: "500",
          color: "#1A1C1D",
        }}
      ></Skeleton>
      <Box
        sx={{
          height: "1px",
          backgroundColor: "#E7EAEE",
          margin: "30px 0",
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: {
            xs: "16px",
            md: "20px",
          },
          fontWeight: "300",
          color: "#60686C",
          maxWidth: "300px",
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: {
            xs: "16px",
            md: "20px",
          },
          fontWeight: "300",
          color: "#60686C",
          maxWidth: "200px",
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: {
            xs: "16px",
            md: "20px",
          },
          marginBottom: "25px",
          fontWeight: "300",
          color: "#60686C",
          maxWidth: "400px",
        }}
      />
      <Skeleton
        variant="text"
        sx={{
          fontSize: {
            xs: "16px",
            md: "32px",
          },

          fontWeight: "500",
          color: "#1A1C1D",
        }}
      ></Skeleton>
      <Skeleton
        variant="text"
        sx={{
          fontSize: {
            xs: "16px",
            md: "14px",
          },
          marginTop: "10px",
          marginBottom: "10px",
          fontWeight: "300",
          color: "#1A1C1D",
          maxWidth: "90px",
        }}
      ></Skeleton>
      <Skeleton
        variant="text"
        sx={{
          fontSize: {
            xs: "16px",
            md: "14px",
          },
          fontWeight: "300",
          color: "#1A1C1D",
          maxWidth: "90px",
        }}
      ></Skeleton>
    </Box>
  );
}

export default ProductDetailsSkeleton;
