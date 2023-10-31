import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import Slide from "@mui/material/Slide";
export default function NextPopulationCard({
  cityName,
  country,
  population_formatted,
  choiceMade,
}) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, [cityName]);

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
          <Box
            paddingLeft={2}
            display={"flex"}
            flexDirection={"row"}
            justifyContent="space-between"
          >
            <Box display={"flex"} flexDirection={"column"}>
              <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
                Current
              </Typography>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyItems={"center"}
                textAlign={"center"}
                alignItems={"center"}
              >
                <Box display={"flex"} flexDirection={"row"}>
                  <Typography variant="h5" component="div">
                    {cityName},
                  </Typography>
                  <Typography variant="body1" component="div" mr={2} mt={1}>
                    {country}
                  </Typography>
                </Box>

                <Typography fontSize={"3rem"}>
                  {choiceMade ? population_formatted : "???"}
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Slide>
  );
}
