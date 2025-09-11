import { Grid, Skeleton } from "@mui/material";
import ProductCardSkeleton from "./product-card-skeleton";
import ContainerBox from "../styles/custom/styledContainer";

type Props = {
  count?: number;
};

function RelatedProductsListSkeleton({ count = 4 }: Props) {
  return (
    <ContainerBox
      backgroundColor="#fefcf5"
      sx={{
        paddingTop: {
          xs: "40px",
          md: "64px",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: {
          xs: "calc(32px + 85px)",
          md: "48px",
        },
      }}
    >
      <Skeleton
        variant="text"
        sx={{
          fontSize: {
            xs: "20px",
            md: "24px",
          },
          fontWeight: "600",
          maxWidth: {
            xs: "100px",
            md: "200px",
          },
          width: "100%",
          marginBottom: {
            xs: "32px",
            md: "48px",
          },
        }}
      />
      <Grid
        container
        justifyContent={"center"}
        rowGap={{
          xs: "30px",
          md: "40px",
        }}
      >
        {Array.from({ length: count }).map((_, index) => (
          <Grid
            key={index}
            item
            xs={6}
            md={4}
            lg={3}
            xl={3}
            justifyContent={"center"}
            display={"flex"}
            paddingX={"10px"}
          >
            {/* products */}
            <ProductCardSkeleton />
          </Grid>
        ))}
      </Grid>
    </ContainerBox>
  );
}

export default RelatedProductsListSkeleton;
