import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularDeterminate() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 225);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgress size="2rem"  variant="determinate" value={progress} sx={{'.MuiCircularProgress-circle':{color:'#93dbc0'}}}/>;
}
