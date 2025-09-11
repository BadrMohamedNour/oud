import { Typography, Box, Skeleton } from "@mui/material";
import lang from "@/locales/ar/product.json";
function OrderProductCardSkeleton() {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      bgcolor={"#FCFCFD"}
      height={"64px"}
      padding={"10px"}
      marginBottom={"10px"}
      gap={"20px"}
    >
      <Skeleton
        variant="text"
        sx={{
          fontSize: "12px",
          width: "100px",
        }}
      />
      <Box>
        <Skeleton
          variant="text"
          sx={{
            fontSize: "10px",
            width: "40%",
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            fontSize: "10px",
            width: "50px",
          }}
        />
      </Box>
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
            width: "40%",
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            fontSize: "10px",
            width: "50px",
          }}
        />
      </Box>
      <Box>
        <Skeleton
          variant="text"
          sx={{
            fontSize: "10px",
            width: "40%",
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            fontSize: "10px",
            width: "50px",
          }}
        />
      </Box>
    </Box>
  );
}
export default OrderProductCardSkeleton;
