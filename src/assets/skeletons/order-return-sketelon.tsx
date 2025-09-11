import { Stack, Box, Skeleton, Button } from "@mui/material";
import SvgArrowLongLeft from "../svg/arrowLongLeft";

function OrderReturnCardSketelon() {
  return (
    <Stack bgcolor={"#FCFCFD"} padding={"10px"} borderRadius={"5px"}>
      <Box display={"flex"}>
        <Skeleton
          variant="rounded"
          sx={{
            borderRadius: "4px",
            height: {
              xs: "100px",
              md: "188px",
            },
            maxWidth: {
              xs: "100px",
              md: "188px",
            },
            width: "100%",
            marginLeft: "10px",
          }}
        />
        {/* content */}
        <Box display={"flex"} width={"100%"}>
          <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
            <Box
              display={"flex"}
              flexDirection={{
                xs: "column",
                lg: "row",
              }}
              justifyContent={{
                xs: "center",
                lg: "space-between",
              }}
              width={"100%"}
            >
              {/* order details */}
              <Box
                display={"flex"}
                justifyContent={{
                  xs: "space-between",
                  lg: "center",
                }}
              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  flexDirection={"column"}
                >
                  <Skeleton
                    variant="text"
                    sx={{
                      fontSize: "16px",
                      width: "140px",
                    }}
                  />
                  <Box
                    marginTop={"10px"}
                    display={{
                      xs: "none",
                      lg: "initial",
                    }}
                  >
                    <Skeleton
                      variant="text"
                      sx={{
                        fontSize: "10px",
                        width: "50px",
                      }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{
                        fontSize: "14px",
                        width: "70px",
                      }}
                    />
                  </Box>
                  <Box alignItems={"center"} marginTop={"10px"} gap={"10px"}>
                    <Skeleton
                      variant="text"
                      sx={{
                        fontSize: "20px",
                        width: "120px",
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  display={{
                    xs: "flex",
                    md: "none",
                  }}
                  alignItems={"center"}
                  alignSelf={"center"}
                >
                  <Button>
                    <SvgArrowLongLeft />
                  </Button>
                </Box>
              </Box>

              {/* return details */}
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-around"}
              >
                <Box
                  display={{
                    xs: "none",
                    md: "flex",
                  }}
                  justifyContent={"space-between"}
                  alignItems={{
                    xs: "center",
                    lg: "start",
                  }}
                  maxWidth={{
                    sx: "100%",
                    md: "295px",
                  }}
                  marginTop={{
                    xs: "20px",
                    lg: "0px",
                  }}
                  width={"100%"}
                >
                  <OrderReturnRef />
                </Box>
                <Box
                  maxWidth={{ xs: "100%", lg: "295px" }}
                  width={"100%"}
                  justifyContent={{ xs: "space-between", lg: "intial" }}
                  display={{
                    xs: "none",
                    lg: "initial",
                  }}
                >
                  <Skeleton
                    variant="text"
                    sx={{
                      fontSize: "16px",
                      width: "90px",
                    }}
                  />
                  <Skeleton
                    variant="text"
                    sx={{
                      fontSize: "14px",
                      width: "70px",
                    }}
                  />
                  <Skeleton
                    variant="text"
                    sx={{
                      fontSize: "14px",
                      width: "300px",
                    }}
                  />
                  <Skeleton
                    variant="text"
                    sx={{
                      fontSize: "14px",
                      width: "100px",
                    }}
                  />
                </Box>
              </Box>
            </Box>

            <Box
              display={{
                xs: "none",
                md: "flex",
              }}
              alignItems={"center"}
              alignSelf={"center"}
            >
              <Button>
                <SvgArrowLongLeft />
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* line */}
      <Box
        sx={{
          height: "8px",
          width: "100%",
          backgroundColor: "#F6F7F9",
        }}
        display={{
          xs: "flex",
          md: "none",
        }}
        marginY={"15px"}
      />
      {/* ref mobile */}
      <Box
        display={{
          xs: "flex",
          md: "none",
        }}
        justifyContent={"space-between"}
        alignItems={{
          xs: "center",
          lg: "start",
        }}
        maxWidth={{
          sx: "100%",
          md: "295px",
        }}
        width={"100%"}
      >
        <OrderReturnRef />
      </Box>
    </Stack>
  );
}

function OrderReturnRef() {
  return (
    <>
      <Box>
        <Skeleton
          variant="text"
          sx={{
            fontSize: "16px",
            width: "120px",
          }}
        />
        <Skeleton
          variant="text"
          sx={{
            fontSize: "14px",
            width: "120px",
          }}
        />
      </Box>
      <Skeleton
        variant="rounded"
        sx={{
          width: "100px",
          height: "28px",
          bgcolor: "#E7EAEE",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50px",
          marginBottom: {
            xs: "5px",
            md: "20px",
          },
        }}
      />
    </>
  );
}

export default OrderReturnCardSketelon;
