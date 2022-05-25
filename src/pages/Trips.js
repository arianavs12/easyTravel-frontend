import * as React from "react";
import AppFooter from "../modules/views/AppFooter";
import AppAppBar from "../modules/views/AppAppBar";
import withRoot from "../modules/withRoot";
import Typography from "../modules/components/Typography";
import './trips.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


//import Typography from '../modules/components/Typography';

function Reviews() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Typography variant="h4" sx={{padding: 2, marginLeft: 12}}>
      MY NEXT VACATIONS
      </Typography>
      <div className="trips">
        <Typography style={{fontSize:30}}>
          My Trips
        </Typography>
        <div>
          
        </div>
      </div>
      <div className="buttons1">
        <div>
        (lista de viajes registrados)
        </div>
        <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
      <Typography style={{fontSize:30}}>
          Add a new trip
        </Typography>
      <TextField
        helperText="Please enter your name"
        id="demo-helper-text-aligned"
        label="Name"
      />
      <TextField
        helperText=" "
        id="demo-helper-text-aligned-no-helper"
        label="Name"
      />
    </Box>
        <div>
         <AddCircleIcon sx={{ marginRight: 4}}/>
         <DeleteIcon sx={{ marginRight: 4}}/>
         <EditIcon/>
        </div>
      </div>
      
    <div className="text">
    In this section you can see your travel packages with the estimated cost according to the added concepts.
    </div>

      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Reviews);
