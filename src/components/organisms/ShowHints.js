import { IconButton, Menu, MenuItem } from "@mui/material";
import { Fragment, useState } from "react";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
export default function ShowHints({ hintsTaken, setHintsTaken }) {
  const [show, setShow] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (e) => {
    setShow(!show);
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setShow(!show);
    setAnchorEl(null);
  };
  if (!hintsTaken) {
    return (
      <Fragment>
        <IconButton
          size="large"
          sx={{
            "&:hover": { background: "#443b54" },
            border: 1,
            borderRadius: "20%",
            background: "gray",
            fontSize: "2rem",
            fontWeight: "bold",
            p: 1,
          }}
          onClick={handleClick}
        >
          <TipsAndUpdatesIcon fontSize="large" />
        </IconButton>
        <Menu
          open={show}
          elevation={6}
          anchorEl={anchorEl}
          onClose={handleClose}
          slotProps={{
            paper: {
              style: {
                background: "gray",
                width: "auto",
              },
            },
          }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem
            // sx={{ backgroundColor: "gray" }}
            onClick={() => {
              setHintsTaken(true);
              setShow(false);
            }}
          >
            Show country
          </MenuItem>
        </Menu>
      </Fragment>
    );
  }
}
