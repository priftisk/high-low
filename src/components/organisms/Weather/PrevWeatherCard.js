import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import Slide from "@mui/material/Slide";
import { ButtonBase } from "@mui/material";
export default function PrevWeatherCard({
  cityName,
  temp,
  country,
  setChoice,
  setChoiceMade,
  choice,
}) {
  const isSelected = choice === "lower";
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <Slide direction="right" in={show} mountOnEnter timeout={500}>
      <Card
        sx={{
          minWidth: 300,
          background: "#4d524e",
          borderRadius: "1rem",
          borderBottom: 1,
          borderRight: 1,
          borderWidth: "0.5rem",
          borderColor: isSelected ? "orange" : "black",
        }}
      >
        <ButtonBase
          sx={{ width: "100%" }}
          onClick={() => {
            setChoiceMade(true);
            setChoice("lower");
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
                <Typography
                  textAlign={"start"}
                  sx={{ fontSize: 14 }}
                  color="white"
                  gutterBottom
                >
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
                  <Typography fontSize={"2.5rem"} textAlign={'center'}>{temp} °C</Typography>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </ButtonBase>
      </Card>
    </Slide>
  );
}
