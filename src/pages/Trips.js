import * as React from "react";
import AppFooter from "../modules/views/AppFooter";
import AppAppBar from "../modules/views/AppAppBar";
import withRoot from "../modules/withRoot";
import Typography from "../modules/components/Typography";
import './trips.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "../modules/components/Button";


function Trips() {

  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <React.Fragment>
      <AppAppBar />
      <Typography variant="h4" sx={{padding: 2, marginLeft: 12}}>
        MY NEXT VACATIONS
      </Typography>
      <Typography variant="h5" sx={{padding: 2, marginLeft: 12}}>
        Please enter the cost for each concept to calculate the estimated value of your trip.
      </Typography>
      <div className="trips">
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     <div>
     <TextField
          id="filled-textarea"
          label="Transport"
          placeholder="$$$"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-textarea"
          label="Lodging"
          placeholder="$$$"
          multiline
          variant="filled"
        />
        <TextField
          id="filled-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue="Tell us something about your next trip"
          variant="filled"
        />
      </div>
      </Box>
      <Button
              color="secondary"
              variant="contained"
              size="large"
              href="/alltrips"
              sx={{ minWidth: 200, marginTop: 3, padding: 0.5}}
            >
              See all trips
            </Button>
    </div>
    <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Trips);
