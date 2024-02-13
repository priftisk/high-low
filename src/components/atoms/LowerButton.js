import { Typography, IconButton, Box } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Fragment } from "react";
export default function LowerButton({ onClick }) {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={0} alignItems={'center'}>
      <Typography color={'white'}>Lower</Typography>
      <IconButton
        size="small"
        disableFocusRipple
        disableRipple
        onClick={onClick}
        sx={{ "&:hover": { background: "#f5b3b3" }}}
      >
        <ArrowDownwardIcon
          sx={{
            color: "red",
            padding: "1rem",
            fontSize:'2rem',
            borderRadius: "1rem",
          }}
        />
      </IconButton>
    </Box>
  );
}
