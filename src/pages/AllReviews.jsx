
import React, {useState, useEffect} from 'react';
import AppFooter from "../modules/views/AppFooter";
import AppAppBar from "../modules/views/AppAppBar";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import './alltrips.css';
import axios from 'axios';

function AllReviews (props) {
  const [mensaje, setMensaje] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/reviews/allreviews`)
    .then(datos => setMensaje(datos.data.reviews))
    .catch(console.log)
  },[])
  return (
    <React.Fragment>
      <AppAppBar {...props}/>
      <div className='posts'>
        <Typography variant='h4' marginTop={5} marginLeft={5}>All the reviews</Typography>
          <Link  marginLeft={160} href='/reviews'>
            <ArrowBackRoundedIcon/>
          </Link>
        
        {
          mensaje.map(reviews => {
            return <div>
            <Card key={reviews._id} sx={{ maxWidth: 345, marginLeft:30, marginTop:5, }}>
            <CardMedia component="img" height="140" image="/images/vacaoffice.webp" alt="viaje" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {reviews.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {reviews.description}
              </Typography>
            </CardContent>
          </Card>
          </div>
                  
          })
        }
      </div>
      
      <AppFooter />
    </React.Fragment>
    

    
  )
}

export default AllReviews;