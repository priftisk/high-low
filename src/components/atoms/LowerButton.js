import { Typography, IconButton } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Fragment } from "react";
export default function LowerButton({ onClick }) {
  return (
    <Fragment>
      <Typography color={'white'}>Lower</Typography>
      <IconButton
        size="large"
        disableFocusRipple
        disableRipple
        onClick={onClick}
        sx={{ "&:hover": { background: "#f5b3b3" }}}
      >
        <ArrowDownwardIcon
          sx={{
            color: "red",
            padding: "1rem",
            fontSize:'4rem',
            borderRadius: "1rem",
          }}
        />
      </IconButton>
    </Fragment>
  );
}
