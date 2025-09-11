import { Typography, Box, ListItemButton, ListItem, List } from "@mui/material";
import sections from "@/services/static/nav-sections.categories";
import SvgArrowLongLeft from "@/assets/svg/arrowLongLeft";
import lang from "@/locales/ar/header.json";
function Sections() {
  return (
    <Box sx={{ width: "1000px", display: "flex" }}>
      <Box
        sx={{
          backgroundColor: "#F6F7F9",
          width: "260px",
        }}
      >
        <List>
          {sections.map(({ name }) => (
            <ListItem
              disablePadding
              key={name}
              sx={{
                ":hover": {
                  backgroundColor: "#F4EBF9",
                  transitionDelay: "3",
                  "& div": {
                    opacity: "1",
                  },
                  "& p": {
                    textIndent: "10px",
                    transition: " 0.5s",
                  },
                },
              }}
            >
              <ListItemButton
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: "500",
                    color: "#1A1C1D",
                    marginLeft: "8px",
                    transition: "0.5s",
                  }}
                >
                  {name}
                </Typography>
                <Box sx={{ opacity: "0", transition: "0.5s" }}>
                  <SvgArrowLongLeft />
                </Box>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box sx={{ width: "100%", bgcolor: "background.paper", padding: "20px" }}>
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: "500",
            color: "#1A1C1D",
          }}
        >
          {lang.text_label_categories}
        </Typography>
        <Box
          height={"1px"}
          width={"100%"}
          bgcolor={"#E7EAEE"}
          marginTop={"10px"}
        />
      </Box>
    </Box>
  );
}

export default Sections;
