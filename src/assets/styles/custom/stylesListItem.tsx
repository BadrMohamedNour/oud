"use client";
import { styled } from "@mui/material/styles";
import { ListItem, ListItemProps } from "@mui/material";
import IsActiveLink from "@/utils/active-link";

interface Props extends ListItemProps {
  link?: string;
}

const CustomListItem = styled(ListItem)<Props>(({ link }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "4px",
  marginBottom: "5px",
  ":hover": {
    ...(link &&
      !IsActiveLink({ path: link }) && {
        backgroundColor: "#F6F7F9",
        transitionDelay: "3",
        "& div": {
          opacity: "1",
        },
        "& .button-transition": {
          marginRight: "10px",
          transition: "0.5s",
        },
      }),
  },
  backgroundColor: link && IsActiveLink({ path: link }) ? "#F4EBF9" : "inherit",
}));

export default CustomListItem;
