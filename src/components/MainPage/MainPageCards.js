import { Grid } from "@mui/material";
import MainPageCard from "../organisms/MainPageCard";
import Groups from "@mui/icons-material/Groups";
import Thermostat from "@mui/icons-material/Thermostat";
export default function MainPageCards() {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor="#262926"
      direction={"row"}
      gap={1}
      minHeight={"100vh"}
    >
      <MainPageCard
        text={"Weather"}
        icon={<Thermostat sx={{ fontSize: "10rem" }} />}
        linkTo={"weather"}
      />
      <MainPageCard
        text={"Population"}
        icon={<Groups sx={{ fontSize: "10rem" }} />}
        linkTo={"population"}
      />
    </Grid>
  );
}
