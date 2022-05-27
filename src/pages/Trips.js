import * as React from "react";
import AppFooter from "../modules/views/AppFooter";
import AppAppBar from "../modules/views/AppAppBar";
import withRoot from "../modules/withRoot";
import Typography from "../modules/components/Typography";
import './trips.css'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Trips(props) {

  const [type, setType] = React.useState('');

  const navigate = useNavigate()

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const [destination, setDestination] = React.useState("");
  const [transport, setTransport] = React.useState("");
  const [hospedaje, setHospedaje] = React.useState("");
  const [budget, setBudget] = React.useState("");
  const [description, setDescription] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({destination, typeOfTransport: transport, typeOfLodjing: hospedaje,budget, description })
    
    axios.post(`${process.env.REACT_APP_SERVER_URL}/trips/create`, {destination: destination, typeOfTransport: transport, typeOfLodjing: hospedaje,budget: budget, description: description })
    .then( datos => {
      console.log(datos)
      navigate("/alltrips")
    })
    .catch( error => console.log(error))
  }

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
    <div className="blue">
        <Typography variant="h5" sx={{padding: 2, marginLeft: 12}}>
          Please enter the cost for each concept to calculate the estimated value of your trip or create a new plan
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
          <Typography>Transport</Typography>
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
          
          <Stack
          component="form"
          sx={{width: '25ch', marginRight:20 }}
          spacing={2}
          noValidate
          autoComplete="off"
          > 
        <Typography>Destination</Typography>
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
          
      <div>
        <Button 
          color="secondary" 
          onClick={handleSubmit}  
        >
        Add Trip
        </Button>
     </div>
      </Stack>
      <div>
        <img src="./images/globos.jpg" alt='globos' width={400}/>
      </div>
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
  </div>
  <AppFooter />
  </React.Fragment>
  );
}

export default withRoot(Trips)
