import { IconButton, Typography, Box } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";
export default function MainPagePopulations() {
  return (
    <Slide direction="down" in={true} mountOnEnter timeout={500}>
      <Link to="population" style={{textDecoration:'none'}}>
        <Box
          sx={{
            width: "20rem",
            height: "20rem",
            backgroundColor: "#4d524e",
            borderRadius: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
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
            <GroupsIcon sx={{ fontSize: "10rem" }} />
          </IconButton>
          <Typography
            className="title"
            sx={{ fontSize: "2rem", color: "white", transition:'color 0.5s' }}
          >
            Population
          </Typography>
        </Box>
      </Link>
    </Slide>
  );
}
