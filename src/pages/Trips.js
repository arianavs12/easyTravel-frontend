import * as React from "react";
import AppFooter from "../modules/views/AppFooter";
import AppAppBar from "../modules/views/AppAppBar";
import withRoot from "../modules/withRoot";
import Typography from "../modules/components/Typography";
import './trips.css'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


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
      <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Small"
        variant="filled"
        size="small"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Small"
        variant="filled"
        size="small"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Small"
        variant="filled"
        size="small"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Small"
        variant="filled"
        size="small"
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Small"
        variant="filled"
        size="small"
      />
    </Stack>
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
