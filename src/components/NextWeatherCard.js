import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";

export default function NextWeatherCard({
  cityName,
  temp,
  choiceMade,
  country,
}) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, [temp]);
  useEffect(() => {
    if (choiceMade === true) {
      setTimeout(() => {
        setShow(false);
      }, [1500]);
    }
  }, [choiceMade]);

  return (
    <Slide direction="left" in={show} mountOnEnter timeout={500}>
      <Card
        sx={{
          minWidth: 200,
          background: "#4d524e",
          borderRadius: "1rem",
          borderBottom: 1,
          borderRight: 1,
          borderWidth: "0.5rem",
          width: 300,
        }}
      >
        <CardContent>
          <Box paddingLeft={2} display={"flex"} flexDirection={"row"}>
            <Box display={"flex"} flexDirection={"column"}>
              <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
                Next
              </Typography>
              <Box
                component={"div"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                textAlign={"center"}
                alignItems={"center"}
              >
                <Box
                  component={"div"}
                  display={"flex"}
                  flexDirection={"row"}
                  textAlign={"center"}
                  justifyItems={"center"}
                  alignItems={"center"}
                >
                  <Typography variant="h5" component="div">
                    {cityName},
                  </Typography>
                  <Typography variant="body1" component="div">
                    {country}
                  </Typography>
                </Box>
                {choiceMade === true ? (
                  <Typography fontSize={"3rem"} textAlign={"center"}>
                    {temp} °C
                  </Typography>
                ) : (
                  <Typography fontSize={"3rem"} textAlign={"center"}>
                    ???
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Slide>
  );
}
