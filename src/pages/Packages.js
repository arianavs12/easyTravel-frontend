import * as React from "react";
import AppFooter from "../modules/views/AppFooter";
import AppAppBar from "../modules/views/AppAppBar";
import withRoot from "../modules/withRoot";
import Typography from "../modules/components/Typography";
import './packages.css'

function Packages() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Typography variant="h4" sx={{padding: 1, marginLeft: 15.5}}>
      MY PACKAGES
      </Typography>
      <div className="packages">
        <div>
          LISTA DE PAQUETES
        </div>
        <div>
          añadir nuevo paquete
        </div>
      </div>
      <div className="buttons">
        <div>
          1.-
          2.-
          3.-
        </div>
        <div>
          boton para añadir nuevo paquete
        </div>
        <div>
          boton para eliminar paquete
        </div>
        <div>
          boton para editar
        </div>
      </div>
      <div className="textField">
        TEXTO
      </div>

      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Packages);
