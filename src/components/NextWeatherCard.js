import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
export default function NextWeatherCard({ cityName, temp, choiceMade, country }) {
  return (
    <Card sx={{ minWidth: 200, background: "#d1e0d5" }}>
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
              display={"flex"}
              flexDirection={"column"}
              justifyItems={"center"}
              textAlign={"center"}
              alignItems={"center"}
            >
              <Box display={"flex"} flexDirection={"row"} textAlign={'center'} justifyItems={'center'} alignItems={'center'}>
                <Typography variant="h5" component="div">
                  {cityName},
                </Typography>
                <Typography variant="body1" component="div" mr={2} mt={1}>
                  {country}
                </Typography>
              </Box>
              {choiceMade === true ? (
                <Typography fontSize={'3rem'} textAlign={'center'}>{temp} °C</Typography>
              ) : (
                <Typography fontSize={'3rem'} textAlign={'center'}>???</Typography>
              )}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
