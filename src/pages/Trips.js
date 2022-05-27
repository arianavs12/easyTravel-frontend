import * as React from "react";
import AppFooter from "../modules/views/AppFooter";
import AppAppBar from "../modules/views/AppAppBar";
import withRoot from "../modules/withRoot";
import Typography from "../modules/components/Typography";
import './trips.css'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




function Trips(props) {

  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    setType(event.target.value);
  };


//crear un viaje
  const [destination, setDestination] = React.useState("");
  const [transport, setTransport] = React.useState("");
  const [hospedaje, setHospedaje] = React.useState("");
  const [budget, setBudget] = React.useState("");
  const [description, setDescription] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    // axios.post(`${process.env.REACT_APP_SERVER_URL}/perfil/equipos`, {nombre, imagen})
    axios.post(`http://localhost:5005/trips/create`, {destination: destination, typeOfTransport: transport, typeOfLodjing: hospedaje,budget: budget, description: description })
    .then( datos => {
      console.log(datos)
    })
    .catch( error => console.log(error))
  }

  //para crear la suma en el input
  const [number, setNumber] = React.useState({one: 0, two: 0, three: 0, four:0, five:0})
  const [suma, setSuma] = React.useState()

  React.useEffect(()=>{
    const { one, two, three, four, five } = number
    setSuma(Number(one) + Number(two) + Number(three) + Number(four) + Number (five))
  },[number])

  const handleInput = (event) => {
    const { name, value } = event.target
    setNumber({...number, [name]: value})
  }


  return (
    <React.Fragment>
      <AppAppBar {...props}/>
      <Typography variant="h4" sx={{padding: 2, marginLeft: 12}}>
        MY NEXT VACATIONS
      </Typography>
      <Typography variant="h5" sx={{padding: 2, marginLeft: 12}}>
        Please enter the cost for each concept to calculate the estimated value of your trip.
      </Typography>
      <Typography>Create a new plan</Typography>
      <div className="trips">
      <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    > <Typography>Transport</Typography>
      <TextField onChange={handleInput} name="one" value={number.one}
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Transport"
        variant="filled"
        size="small"
      />
      <Typography>Lodjing</Typography>
      <TextField onChange={handleInput} name="two" value={number.two}
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Lodjin"
        variant="filled"
        size="small"
      />
      <Typography>Foods</Typography>
      <TextField onChange={handleInput} name="three" value={number.three}
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Food"
        variant="filled"
        size="small"
      />
      <Typography>Others</Typography>
      <TextField onChange={handleInput} name="four" value={number.four}
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Others"
        variant="filled"
        size="small"
      />
      <Typography>Total</Typography>
      <TextField value={suma}
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Total"
        variant="filled"
        size="small"
      />
    </Stack>
     {/* crear viaje */}
      <Stack
      component="form"
      sx={{width: '25ch', marginRight:60 }}
      spacing={2}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    > <Typography>Destination</Typography>
      <TextField onChange={ (event) => setDestination(event.target.value)}
        name="one" 
        value={destination}
        hiddenLabel
        id="destination"
        defaultValue="Destination"
        variant="filled"
        size="small"
      />
      <Typography>Budget</Typography>
      <TextField onChange={ (event) => setBudget(event.target.value)}
        name="four" 
        value={budget}
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Others"
        variant="filled"
        size="small"
      />
      <Typography>Description</Typography>
       <TextField onChange={ (event) => setDescription(event.target.value)}
        name="four" 
        value={description}
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Others"
        variant="filled"
        size="small"
      />
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Lodjing</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="type"
          onChange={ (event) => setHospedaje(event.target.value)}
        >
          <MenuItem value={hospedaje}>Hotel</MenuItem>
          <MenuItem value={hospedaje}>Airbnb</MenuItem>
          <MenuItem value={hospedaje}>No charge</MenuItem>
        </Select>
      </FormControl>
    </Box>
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Transport</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="type"
          onChange={ (event) => setTransport(event.target.value)}
        >
          <MenuItem value={transport}>Aereo</MenuItem>
          <MenuItem value={transport}>Car</MenuItem>
        </Select>
      </FormControl>
    </Box>
    <div>
    <Button 
    color="secondary"
    variant="success" 
    type="submit"
    size="large"
    
    >
      Add Trip
    </Button>
    </div>
    </Stack>
    

    </div>
    <div>
    <Button 
      color="secondary"
      variant="contained"
      size="large"
      href="/alltrips"
      sx={{ minWidth: 200, padding: 0.5, marginTop: 20, marginLeft: 120 }}
      >
      See all trips
      </Button>
    </div>
    <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Trips)
