import React from 'react'
import AppFooter from "../modules/views/AppFooter";
import AppAppBar from "../modules/views/AppAppBar";
import Typography from '../modules/components/Typography';
import { Link } from '@mui/material';

function thanks (props){
  return (
    <React.Fragment>
         <AppAppBar {...props}/>
         <Typography variant="h4" style={{color:'#ec407a', marginTop: 50, marginLeft:40, marginRight:40}}>
            ¡MUCHAS GRACIAS POR TU ATENCIÓN EN MI PRESENTACIÓN DE ÚLTIMO PROYECTO IRONHACK,

            TE INVITO A SEGUIR EN CONTACTO CONMIGO Y CONOZCAS MI CRECIMIENTO 

            EN EL CAMPO LABORAL!
         </Typography>
         <Link href='https://www.linkedin.com/in/arianavasquezs/'>
           <img src="./images/linkedin.png" alt="" width={80} style={{marginTop: 30, marginLeft:40,}} />
         </Link>
         <AppFooter />
    </React.Fragment>
   
  )
}

export default thanks;