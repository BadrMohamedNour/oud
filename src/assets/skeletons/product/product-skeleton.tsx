import { Box } from "@mui/material";
import ContainerBox from "@/assets/styles/custom/styledContainer";
import ProductDetailsSkeleton from "./product-details-skeleton";
import ProductActionsSkeleton from "./product-actions-skeleton";
import ProductGallerySkeleton from "./product-gallery-skeleton";

function ProductSkeleton() {
  return (
    <ContainerBox
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column-reverse",
          md: "row",
        },
        gap: "20px",
        paddingTop: {
          xs: "32px",
          md: "48px",
        },
        paddingBottom: {
          xs: "20px",
          md: "48px",
        },
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        width={{
          xs: "100%",
          md: "50%",
        }}
      >
        {/* product details */}
        <ProductDetailsSkeleton />

        {/* product actions */}
        <ProductActionsSkeleton />
      </Box>
      {/* product images */}

      <ProductGallerySkeleton imagesCount={8} />
    </ContainerBox>
  );
}

export default ProductSkeleton;
