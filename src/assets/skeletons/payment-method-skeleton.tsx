import { Box, Skeleton } from "@mui/material";
function PaymentMethodCardSkeleton() {
  return (
    <Box
      bgcolor={"#FCFCFD"}
      display={"flex"}
      flexDirection={"column"}
      borderRadius={"8px"}
      flex={1}
      paddingY={{
        xs: "15px",
        md: "0px",
      }}
    >
      <Box display={"flex"} alignItems={"center"} flex={1}>
        <Box
          bgcolor={"rgba(0, 0, 0, 0.11)"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          width={{
            xs: "102px",
            md: "112px",
          }}
          height={{
            xs: "75px",
            md: "128px",
          }}
          sx={{
            borderTopRightRadius: "8px",
            borderBottomRightRadius: "8px",
            borderTopLeftRadius: {
              xs: "8px",
              md: "0px",
            },
            borderBottomLeftRadius: {
              xs: "8px",
              md: "0px",
            },
          }}
        ></Box>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flex={1}
          padding={"0 20px"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap={{
              xs: "0",
              md: "15px",
            }}
          >
            <Box>
              <Skeleton
                width={105}
                sx={{
                  fontSize: "10px",
                }}
              />
              <Skeleton
                width={105}
                sx={{
                  fontSize: "14px",
                }}
              />
            </Box>
            <Box>
              <Skeleton
                width={80}
                sx={{
                  fontSize: "10px",
                }}
              />
              <Skeleton
                width={50}
                sx={{
                  fontSize: "14px",
                }}
              />
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={"5px"}>
            <Skeleton
              width={80}
              sx={{
                fontSize: "14px",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PaymentMethodCardSkeleton;
