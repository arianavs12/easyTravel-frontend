import * as React from "react";
import AppFooter from "../modules/views/AppFooter";
import AppAppBar from "../modules/views/AppAppBar";
import withRoot from "../modules/withRoot";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from "../modules/components/Typography";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import NavigationIcon from '@mui/icons-material/Navigation';
import './reviews.css'
import Button from "../modules/components/Button";


function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}


function Reviews(props) {
  const [values, setValues] = React.useState({
    title: "",
    description: "",
  });
  function handleSubmit(evt) {
    /*
      Previene el comportamiento default de los
      formularios el cual recarga el sitio
    */
    evt.preventDefault();
    // Aquí puedes usar values para enviar la información
  }
  function handleChange(evt) {
    /*
      evt.target es el elemento que ejecuto el evento
      name identifica el input y value describe el valor actual
    */
    const { target } = evt;
    const { name, value } = target;
    /*
      Este snippet:
      1. Clona el estado actual
      2. Reemplaza solo el valor del
         input que ejecutó el evento
    */
    const newValues = {
      ...values,
      [name]: value,
    };
    // Sincroniza el estado de nuevo
    setValues(newValues);
  }
  return (
    <React.Fragment>
    <AppAppBar {...props}/>
    <Typography variant='h4' color='#26a69a' sx={{ paddingTop: 3, paddingLeft: 3 }}>
    Share your experiences, we would love to know how you enjoyed your vacation and what advice you give us.
    </Typography>
<div className="collage">
  <div className="collage1">
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
 <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        name="title"
        type="text"
        value={values.title}
        onChange={handleChange}
      />
      <label htmlFor="password">Description</label>
      <input
        name="description"
        type="text"
        value={values.description}
        onChange={handleChange}
      />
      <button type="submit">Share</button>
    </form>
 </div>
 <div className="addContent">
 
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab variant="extended">
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
      sx={{ minWidth: 200, marginTop: 3, padding: 0.5}}
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
