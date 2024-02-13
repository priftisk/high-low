import { Slide, Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
export default function MainPageCard({ text, icon, linkTo }) {
  return (
    <Slide direction="down" in={true} mountOnEnter timeout={500}>
      <Link to={linkTo} style={{ textDecoration: "none" }}>
        <Box
          sx={{
            width: "20rem",
            height: "20rem",
            borderRadius: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            "&:hover": { backgroundColor: "#4d524e" },
            "&:hover .icon": { color: "#9a62bd" },
            "&:hover .title": { color: "#9a62bd" },
          }}
        >
          <IconButton
            className="icon"
            disableFocusRipple
            disableRipple
            sx={{
              color: "white",
              transition: "color 0.5s",
            }}
            size="10rem"
          >
            {icon}
          </IconButton>
          <Typography
            className="title"
            sx={{ fontSize: "2rem", color: "white", transition: "color 0.5s" }}
          >
            {text}
          </Typography>
        </Box>
      </Link>
    </Slide>
  );
}
