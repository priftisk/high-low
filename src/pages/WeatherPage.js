import { Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import fetchWeather from "../components/helper/fetch";
import WeatherCard from "../components/WeatherCard";
export default function WeatherPage(){
    const [city, setCity] = useState('')
    const [result, setResult] = useState()
    const handleClick = async () => {
        if (city.length >= 3) {
          const weatherData = await fetchWeather({ query: city });
          if (weatherData) {
            setResult(weatherData);
          }
        }
      };
      console.log(result)
    return(
        <Grid 
            container 
            display={'flex'}
            flexDirection={'column'}
            backgroundColor='#e8e4da'
            minHeight={'100vh'}
            alignContent={'center'}
        >
            <Grid item>
                 <Typography 
                    sx={{
                        fontSize:'3rem', 
                        textAlign:'center',
                        fontWeight:800,
                        letterSpacing: 6,
                        color:'white',
                        background:'#471873',
                        marginTop:2,
                        borderRadius:2,
                        paddingX:2
                    }}
                >
                WEATHER
                </Typography>
            </Grid>
           
            <Grid 
                item
                marginTop={4} 
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'center'}
            >
     
                <TextField 
                    variant="standard"
                    required 
                    fullWidth
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Searh for a city"
                    InputProps={{
                        endAdornment: <Button 
                        onClick={() => handleClick()} 
                        variant="contained" 
                        disableElevation>
                            Search
                        </Button> 
                    }}
                />
            </Grid>
            <div style={{marginTop:'1rem'}}>
                {result !== undefined && ( <WeatherCard cityName={result.name} temp={result.main.temp} description={result.weather[0].description}/>)}
               
            </div>
            
  
        </Grid>
      
    )
}