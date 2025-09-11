import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Skeleton } from "@mui/material";

type Props = {
  imagesCount?: number;
};

function ProductGallerySkeleton({ imagesCount = 8 }: Props) {
  return (
    <Box
      width={{
        xs: "100%",
        md: "50%",
      }}
      maxHeight={{
        xs: "358px",
        md: "610px",
      }}
      display={"flex"}
      justifyContent={{
        xs: "space-between",
        md: "normal",
      }}
      marginBottom={{
        xs: "10px",
        md: "0px",
      }}
    >
      {/* featured image */}
      <Skeleton
        variant="rounded"
        sx={{
          borderRadius: "6px",
          width: "100%",
          height: {
            xs: "358px",
            md: "100%",
          },
        }}
      ></Skeleton>
      {/* image list*/}
      <Box
        position={"relative"}
        marginRight={"20px"}
        sx={{
          "&:after": {
            display: `${imagesCount > 3 ? "block" : "none"}`,
            content: '""',
            position: "absolute",
            bottom: "0",
            width: "100%",
            boxShadow: "0px 0px 20px 20px white",
          },
        }}
      >
        <ImageList
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: `${imagesCount === 3 && "space-between"}`,
            width: {
              xs: "65px",
              md: "94px",
            },
            height: {
              xs: "100%",
              md: "100%",
            },
            "&::-webkit-scrollbar": {
              scrollbarWidth: "none",
              display: "none",
            },
          }}
          gap={20}
        >
          {[...Array(imagesCount)].map((index) => {
            return (
              <ImageListItem key={index} cols={2} rows={2}>
                <Skeleton
                  variant="rounded"
                  sx={{
                    borderRadius: "6px",
                    maxWidth: {
                      xs: "65px",
                      md: "94px",
                    },
                    width: "100%",
                    height: {
                      xs: "65px",
                      md: "94px",
                    },
                    border: "1px solid #ffff",
                  }}
                ></Skeleton>
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>
    </Box>
  );
}

export default ProductGallerySkeleton;
