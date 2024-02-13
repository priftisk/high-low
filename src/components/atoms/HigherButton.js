import { Typography, IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Fragment } from "react";
export default function HigherButton({ onClick }) {
  return (
    <Fragment>
      <Typography color={"white"}>Higher</Typography>
      <IconButton
        size="small"
        disableFocusRipple
        disableRipple
        onClick={onClick}
        sx={{ "&:hover": { background: "#f5b3b3" } }}
      >
        <ArrowUpwardIcon
          sx={{
            color: "green",
            padding: "1rem",
            fontSize: "2rem",
            borderRadius: "1rem",
          }}
        />
      </IconButton>
    </Fragment>
  );
}
