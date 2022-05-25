import * as React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppFooter from "../modules/views/AppFooter";
import AppAppBar from "../modules/views/AppAppBar";

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

const AllTrips = () => {
    const [trips, setTrips] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5005/trips/alltrips")
            .then(datos => setTrips(datos.data.trip))
            .catch(console.log)
    }, [])
    return (
        <div>All trips
            {
                trips.map(trip => {
                    return (
                        <>
                        <AppAppBar />
                            <Box sx={{ minWidth: 275 }}>
                            <Card variant="outlined">{card}
                                <div title={trip.destination} description={trip.description} />
                            </Card>
                            </Box>
                        <AppFooter />
                        </>
                        )
                })
            }

        </div>
    )
}

export default AllTrips