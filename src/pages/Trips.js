import * as React from "react";
import AppFooter from "../modules/views/AppFooter";
import AppAppBar from "../modules/views/AppAppBar";
import withRoot from "../modules/withRoot";
import Typography from "../modules/components/Typography";
import './trips.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


//import Typography from '../modules/components/Typography';

function Reviews() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Typography variant="h4" sx={{padding: 1, marginLeft: 15.5}}>
      MY PLANS FOR THE NEXT VACATIONS
      </Typography>
      <div className="trips">
        <Typography variant="h5">
          My Trips
        </Typography>
        <div>
          
        </div>
      </div>
      <div className="buttons1">
        <div>
        lista de viajes registrados
        </div>
        <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      }}
    >
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
      
      <FormControl sx={{padding: 1, marginLeft: 14}}>
      <FormLabel id="demo-radio-buttons-group-label">Type of lodging</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        
      >
        <FormControlLabel value="Hotel" control={<Radio />} label="Hotel" />
        <FormControlLabel value="Airbnb" control={<Radio />} label="Airbnb" />
        <FormControlLabel value="Other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
    <div className="text">
    In this section you can see your travel packages with the estimated cost according to the added concepts.
    </div>

      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Reviews);
