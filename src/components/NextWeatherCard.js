import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
export default function NextWeatherCard({ cityName, temp, choiceMade }) {
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
              Next
            </Typography>
            <Box
              gap={2}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              textAlign={"center"}
              alignItems={"center"}
            >
              <Typography variant="h5" component="div">
                {cityName}
              </Typography>
              {choiceMade === true ? (
                <Typography variant="h5">{temp} °C</Typography>
              ) : (
                <Typography variant="h5">???</Typography>
              )}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
