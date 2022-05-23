import * as React from "react";
import AppFooter from "../modules/views/AppFooter";
import AppAppBar from "../modules/views/AppAppBar";
import withRoot from "../modules/withRoot";
import Typography from "../modules/components/Typography";
import './trips.css'
//import Typography from '../modules/components/Typography';

function Reviews() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Typography variant="h4" sx={{padding: 1, marginLeft: 15.5}}>
      MY PLANS FOR THE NEXT VACATIONS
      </Typography>
      <div className="trips">
        <div>
          LISTA DE VIAJES
        </div>
        <div>
          añadir nuevo viaje
        </div>
      </div>
      <div className="buttons">
        <div>
          1.-
          2.-
          3.-
        </div>
        <div>
          boton para añadir viaje
        </div>
      </div>
      <div className="text">
        TEXTO
      </div>

      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Reviews);
