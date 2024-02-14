import { Button, Menu, MenuItem } from "@mui/material";
import { Fragment, useState } from "react";

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
        <Button
          variant="contained"
          disableElevation
          sx={{
            "&:hover": { background: "#443b54" },
            border: 1,
            borderRadius: "20%",
            background: "#262926",
            fontSize: "2rem",
            fontWeight: "bold",
            p: 0,
          }}
          onClick={handleClick}
        >
          {`(?)`}
        </Button>
        <Menu
          open={show}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        >
          <MenuItem onClick={() => setHintsTaken(true)}>Take hint</MenuItem>
        </Menu>
      </Fragment>
    );
  }
}
