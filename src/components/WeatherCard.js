import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Icon, IconButton } from '@mui/material';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function WeatherCard({cityName, temp, description}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Box paddingLeft={2} display={'flex'} flexDirection={'row'} justifyContent='space-between'>
            <Box display={'flex'} flexDirection={'column'}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Current Weather
                </Typography>
                <Typography variant="h5" component="div">
                {cityName}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {description}
                </Typography>
                <Typography variant="body2">
                {temp}
                </Typography>
            </Box>
       
        <Icon sx={{margin:'auto', fontSize:'4rem'}} >
            <ThunderstormIcon fontSize='inherit'/>
        </Icon>
        </Box>
        
      </CardContent>
    </Card>
  );
}
