import AppFooter from "../modules/views/AppFooter";
import AppAppBar from "../modules/views/AppAppBar";
import withRoot from "../modules/withRoot";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from "../modules/components/Typography";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import './reviews.css'
import Button from "../modules/components/Button";
import TextField from '@mui/material/TextField';
import React, {useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom'


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function Reviews(props) {

  const [title, setTitle] = useState ("")
  const [description, setDescription] = useState ("")
  const navigate = useNavigate()


  function handleSubmit(e){
      console.log(title, description)
      axios.post(`${process.env.REACT_APP_SERVER_URL}/reviews/create`, {title, description})
      .then (newMessage => {
        navigate('/allreviews')
      })
      .catch(err => console.log(err))
  }

  /* const [values, setValues] = React.useState({
    title: "",
    description: "",
  });
   */

  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <React.Fragment>
    <AppAppBar {...props}/>
    <Typography variant='h4' color='#26a69a' sx={{ paddingTop: 2, paddingLeft: 3 }}>
    Share your experiences, we would love to know how you enjoyed your vacation and what advice you give us.
    </Typography>
    <div className="collage">
    <div className="collage1">
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      marginRight={60}
    >
      <div>
        <Typography>Title</Typography>
        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="filled"
          value={title}
          onChange={(evento) => setTitle(evento.target.value)}
          
        />
        <Typography>Description</Typography>
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue=""
          variant="filled"
          value={description}
          onChange={(evento) => setDescription(evento.target.value)}
        />
      </div>
    </Box>
  <ImageList
      sx={{ width: 500, height: 450, padding:3}}
      variant="quilted"
      cols={4}
      rowHeight={150}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
 </div>
 <div className="form">
 </div>
 <div className="addContent">
 
    <Box sx={{ '& > :not(style)': { m: 1 }, marginLeft: 18 }}>
      <Fab 
      onClick={handleSubmit}
      variant="extended">
        <NavigationIcon sx={{ mr: 1, type:"submit" }} />
        Share
      </Fab>
    </Box>
  </div>
  <div>
    <Button
      color="secondary"
      variant="contained"
      size="large"
      href="/allreviews"
      sx={{ minWidth: 200, marginTop: 3, padding: 0.5, marginLeft: 10}}
    >
      SEE ALL REVIEWS
    </Button>
  </div>
</div>
<AppFooter />
</React.Fragment>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: './images/tlayuda.jpg',
    title: 'Tlayuda',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: './images/niña.webp',
    title: 'Girl',
    cols: 2,
  },
  {
    img: '/images/tajmahal.jpg',
    title: 'Taj Mahal',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: './images/avion.webp',
    title: 'Plane',
  },
  {
    img: './images/amsterdam.jpg',
    title: 'Amsterdam',
  },
  {
    img: './images/bali.jpg',
    title: 'Bali',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: './images/primavera.jpg',
    title: 'Primavera',
  },
  {
    img: './images/orizaba.jpg',
    title: 'Orizaba',
  },
  {
    img: './images/loscabos.jpg',
    title: 'Los Cabos',
  },
  {
    img: './images/mediterranea.jpg',
    title: 'Gastronomia Mediterranea',
  },
  {
    img: './images/oaxaca.jpg',
    title: 'Oaxaca',
    rows: 2,
    cols: 2,
  },
  {
    img: './images/egipto.jpg',
    title: 'Egipto',
    rows: 2,
    cols: 2,
  },
];

export default withRoot(Reviews);
