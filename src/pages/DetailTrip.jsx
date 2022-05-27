import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Stack from '@mui/material/Stack';
/* import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'; */
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import AppFooter from "../modules/views/AppFooter";
import AppAppBar from "../modules/views/AppAppBar";
import './detailTrip.css';




export const DetailTrip = (props) => {
    const { id } = useParams()
    const [trip, setTrip] = useState ({})
    const [value, setValue] = React.useState('Hotel')
    const [showEdit, setShowEdit] = useState(false)

  const handleChange = (event) => {
    setValue(event.target.value);
  };
    
    useEffect(() =>{
        axios.get(`${process.env.REACT_APP_SERVER_URL}/trips/details/${id}`)
        .then( lainfo => {
            console.log(lainfo)
            setTrip(lainfo.data)
        })
        .catch(console.log)
    }, [id])
  return (
    <div>
        <div className='details'>

        
            <AppAppBar {...props}/>
            {showEdit === false && (
            <>

            <p>Destination: {trip.destination}</p>
            <p>Budget: {trip.budget}</p>
            <p>Type of Lodjing: {trip.typeOfLodjing}</p>
            <p>Type of Transport: {trip.typeOfTransport}</p>
            <p>Description: {trip.description}</p>

            </>

            )}
            {
            showEdit === true && (
            <>
             <Stack
                component="form"
                sx={{width: '25ch'}}
                spacing={2}
                noValidate
                autoComplete="off"
                >
            <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                value={trip.destination}
                variant="filled"
                size="small"
                />
            <TextField
                hiddenLabel
                id="filled-hidden-label-normal"
                value={trip.budget}
                variant="filled"
                />
            <TextField
                hiddenLabel
                id="filled-hidden-label-normal"
                value={trip.description}
                variant="filled"
                />
            </Stack>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Type of lodjing</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                    >
                    <FormControlLabel value={"Hotel"} control={<Radio />} label="Hotel" />
                    <FormControlLabel value="Hostal" control={<Radio />} label="Hostal" />
                    <FormControlLabel value="Airbnb" control={<Radio />} label="Airbnb" />
                    <FormControlLabel value="No charge" control={<Radio />} label="No charge" />
                </RadioGroup>
            </FormControl>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Type of transport</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                    >
                    <FormControlLabel value="Aereo" control={<Radio />} label="Aereo" />
                    <FormControlLabel value="Car" control={<Radio />} label="Car" />
                </RadioGroup>
            </FormControl>
            <div>
                <Button variant="contained" color="success">Update</Button>
            </div>
        
            </>
            )
            }


            {/* <Stack direction="row" alignItems="center" spacing={1}>
                <IconButton aria-label="delete" size="large">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
                <IconButton 
                    aria-label="edit" 
                    size="large"
                    onClick={() => setShowEdit(true)}
                    >
                    <EditIcon fontSize="inherit" />
                </IconButton>
            </Stack> */}
        </div>
            <AppFooter />
    </div>
    
  )
}
