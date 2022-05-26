import React, {useState, useEffect} from 'react';
import AppFooter from "../modules/views/AppFooter";
import AppAppBar from "../modules/views/AppAppBar";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link";
import axios from 'axios';

function AllTrips () {
  const [trips, setTrips] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/trips/alltrips`)
    .then(datos => setTrips(datos.data))
    .catch(console.log)
  },[])
  return (
    <React.Fragment>
      <AppAppBar />
      <div>
        Estos son todos tus viajes
        {
          trips.map(trips => {
            return <div key={trips._id}>
            <Card sx={{ maxWidth: 345, marginLeft:5, marginTop:5 }}>
            <CardMedia component="img" height="140" image="/images/vacaoffice.webp" alt="viaje" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {trips.destination}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Edit</Button>
              <Button size="small">Delete</Button>
              <Button size="small">
                <Link align="center" underline="always" href={`/detail/${trips._id}`}>
                Details
                </Link>
              </Button>
           </CardActions>
          </Card>
          </div>
          })
        }
      </div>
      
      <AppFooter />
    </React.Fragment>
    

    
  )
}

export default AllTrips;