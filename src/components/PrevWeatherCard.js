import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
export default function PrevWeatherCard({ cityName, temp, country}) {
  return (
    <Card sx={{ minWidth: 275, background: "#d1e0d5" }}>
      <CardContent>
        <Box
          paddingLeft={2}
          display={"flex"}
          flexDirection={"row"}
          justifyContent="space-between"
        >
          <Box display={"flex"} flexDirection={"column"}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Current
            </Typography>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyItems={"center"}
              textAlign={"center"}
              alignItems={"center"}
            >
              <Typography variant="h5" component="div">
                {cityName},
              </Typography>
              <Typography variant="body1" component="div" mr={2} mt={1}>
                {country}
              </Typography>
              <Typography variant="h5">{temp} °C</Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
