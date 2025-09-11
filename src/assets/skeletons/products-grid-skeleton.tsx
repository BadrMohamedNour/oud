import ProductCardSkeleton from "./product-card-skeleton";
import Grid from "@mui/material/Grid";

type GridBreakpoints = {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
};

type Props = {
  count?: number;
  gridBreakpoints?: GridBreakpoints;
  sx?: any;
};

function ProductsGridSkeleton({
  count = 8,
  gridBreakpoints = { xs: 6, sm: 4, md: 6, lg: 4, xl: 3 },
}: Props) {
  return (
    <Grid
      container
      rowGap={{
        xs: "30px",
        md: "40px",
      }}
      marginLeft={"0 !important"}
    >
      {Array.from({ length: count }).map((_, index) => (
        <Grid
          key={index}
          item
          xs={gridBreakpoints.xs}
          sm={gridBreakpoints.sm}
          md={gridBreakpoints.md}
          lg={gridBreakpoints.lg}
          xl={gridBreakpoints.xl}
          justifyContent="center"
          display="flex"
          paddingX="10px"
        >
          <ProductCardSkeleton />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductsGridSkeleton;
