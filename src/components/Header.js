import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate=  useNavigate();
  const styles = {
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: '#302642',
      opacity: "90%",
    },
    toolbar: {
      justifyContent: "center",
    },
    typographyHigh: {
      flexGrow: 1,
      textAlign: "center",
      fontWeight: "bold",
      color: "#7ce01d",
      fontSize: "2.5rem",
    },
    typographyLow: {
      flexGrow: 1,
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "2.5rem",
      color: "#e01d1d",
    },
    typographySeparator: {
      flexGrow: 1,
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "3rem",
      color: "black",
    },

    box: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      gap: 2,
      alignItems: "center",
      borderRadius: "1rem",
      paddingX: 2,
      transition: "background-color 0.3s",
      "&:hover": {
        backgroundColor: "#140b24", 
      },
      cursor:'pointer',
    },
  };
  return (
    <div style={styles.root}>
      <AppBar position="static" sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          <Box sx={styles.box} onClick={() => navigate('/')}>
            <Typography variant="h6" component="div" sx={styles.typographyHigh}>
              High
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={styles.typographySeparator}
            >
              /
            </Typography>
            <Typography variant="h6" component="div" sx={styles.typographyLow}>
              Low
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
