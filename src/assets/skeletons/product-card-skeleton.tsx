import { Box, Card, Skeleton } from "@mui/material";

function ProductCardSkeleton() {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        width: "100%",
        padding: "5px",
        borderRadius: "8px",
        boxShadow: "none",
      }}
    >
      <Box
        sx={{
          width: "auto",
          height: {
            xs: "161px",
            md: "281px",
          },
        }}
      >
        <Skeleton
          variant="rounded"
          sx={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <Box display={"flex"} flexDirection={"column"} sx={{ marginTop: "24px" }}>
        <Skeleton
          variant="text"
          sx={{
            fontSize: "16px",
            width: "20%",
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            marginBottom: "20px",
            fontSize: "16px",
            width: "50%",
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            fontSize: "12px",
            width: "30%",
          }}
        />
        <Box
          display={"flex"}
          gap={0.5}
          sx={{
            flexDirection: {
              xs: "column",
              md: "row",
            },
          }}
        >
          <Skeleton
            variant="text"
            sx={{
              fontSize: "12px",
              width: "45%",
            }}
          />
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        gap={1}
        alignItems={"center"}
        sx={{ marginTop: "24px" }}
      >
        <Skeleton
          variant="rounded"
          sx={{
            borderRadius: "8px",
            width: "100%",
            height: {
              xs: "44px",
              md: "48px",
            },
          }}
        />
      </Box>
    </Card>
  );
}

export default ProductCardSkeleton;
