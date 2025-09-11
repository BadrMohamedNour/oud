import { Skeleton, Box } from "@mui/material";

interface Props {
  isMainAddress?: boolean;
}

function AddressSkeleton({ isMainAddress }: Props) {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      flexDirection={{
        xs: "column",
        lg: "row",
      }}
      alignItems={{
        xs: "start",
        lg: "center",
      }}
      borderRadius={"8px"}
      padding={"20px"}
      marginBottom={"15px"}
      bgcolor={"#FCFCFD"}
    >
      <Box width={"100%"}>
        <Skeleton
          variant="text"
          width={80}
          sx={{ fontSize: "20px", marginBottom: "15px" }}
        />
        <Box display={"flex"}>
          <Skeleton
            variant="text"
            sx={{ fontSize: "16px", marginLeft: "30px" }}
            width={82}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "16px", maxWidth: "300px", width: "100%" }}
          />
        </Box>
        <Box display={"flex"} marginTop={"20px"}>
          <Skeleton
            variant="text"
            sx={{ fontSize: "16px", marginLeft: "30px" }}
            width={82}
          />
          <Skeleton
            variant="text"
            sx={{
              fontSize: "16px",
              maxWidth: "300px",
              width: "100%",
            }}
          />
        </Box>
        <Box display={"flex"} marginTop={"20px"}>
          <Skeleton
            variant="text"
            sx={{ fontSize: "16px", marginLeft: "30px" }}
            width={82}
          />
          <Skeleton
            variant="text"
            sx={{ fontSize: "16px", maxWidth: "300px", width: "100%" }}
          />
        </Box>
      </Box>
      {/* children (button ...) */}
      <Box
        display={"flex"}
        gap={"20px"}
        marginTop={{
          xs: "20px",
          lg: "0px",
        }}
        width={{
          xs: "100%",
          lg: "initial",
        }}
      >
        {!isMainAddress && (
          <Skeleton
            variant="rounded"
            sx={{
              paddingX: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: {
                xs: "50%",
                lg: "170px",
              },
              height: {
                xs: "44px",
                md: "48px",
              },
            }}
          />
        )}
        <Skeleton
          variant="rounded"
          sx={{
            paddingX: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: {
              xs: "50%",
              lg: "48px",
            },
            height: {
              xs: "44px",
              md: "48px",
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default AddressSkeleton;
