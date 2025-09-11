"use client";
import { useState } from "react";
import { Box, Stack } from "@mui/material";
import nav_categories from "@/services/static/nav-categories";

import Link from "next/link";
import ROUTES from "@/utils/routes";

const NavSection = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Stack
      flexDirection="row"
      alignItems="center"
      sx={{
        backgroundColor: "#fcfcfd",
        padding: "4px 100px 4px 0px",
        display: {
          xs: "none",
          md: "flex",
        },
        paddingTop: {
          xs: "18px",
          md: "16px",
        },
        paddingRight: {
          xs: "16px",
          md: "100px",
        },
        paddingBottom: {
          xs: "18px",
          md: "16px",
        },
        paddingLeft: {
          xs: "16px",
          md: "100px",
        },
        gap: {
          md: "50px",
          lg: "100px",
        },
      }}
    >
      {/* <Box>
        <Button
          disableTouchRipple
          aria-describedby={id}
          onClick={handleClick}
          sx={{
            weight: "118px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ":hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: "500",
              color: "#1A1C1D",
              marginLeft: "8px",
            }}
          >
            {header.text_nav_categories}
          </Typography>
          <SvgArrowBottom />
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          sx={{
            borderRadius: "8px",
            display: {
              xs: "none",
              md: "block",
            },
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          elevation={2}
        >
          sections 
          <Sections />
        </Popover>
      </Box> */}
      <Stack
        display="grid"
        gridTemplateColumns="repeat(7, 1fr)"
        direction="row"
        alignItems="center"
        paddingY={"15px"}
        rowGap={"25px"}
        columnGap={"20px"}
      >
        {nav_categories.map(({ id, name }) => {
          return (
            <Box
              key={id}
              sx={{
                fontFamily: "var(--font-ExpoArabic)",
                borderRadius: "8px",
                fontWeight: "300",
                color: "#484E51",
              }}
            >
              <Link href={`${ROUTES.CATEGORY.path}/${id}`}>{name}</Link>
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default NavSection;
