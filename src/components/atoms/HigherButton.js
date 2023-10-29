import { Typography, IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";import { Fragment } from "react";
export default function HigherButton({onClick}){
    return(
        <Fragment>
             <Typography color={'white'}>Higher</Typography>
              <IconButton
                size="large"
                disableRipple
                disableFocusRipple
                onClick={onClick}
                sx={{ "&:hover": { background: "#bfdec5" }}}
              >
                <ArrowUpwardIcon
                  sx={{
                    color: "green",
                    padding: "1rem",
                    fontSize:'4rem',
                    borderRadius: "1rem",
                  }}
                />
              </IconButton>
        </Fragment>
    ) 
}