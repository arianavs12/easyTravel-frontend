import * as React from "react";
import AppFooter from "../modules/views/AppFooter";
import AppAppBar from "../modules/views/AppAppBar";
import withRoot from "../modules/withRoot";
import { Avatar } from "@mui/material";
import Button from "../modules/components/Button";
import './profile.css';
import Typography from "../modules/components/Typography";
//import Toolbar from '../modules/components/Toolbar';
//import { Box } from "@mui/system";

function Profile() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Typography variant="h4" sx={{padding: 1, marginLeft: 15.5}}>
        WELCOME!
      </Typography>
      <div className="profile">
        <div className="container">
          <div >
            <Avatar
              sx={{ width: 200, height: 180}}
              variant="square"
            />

            <Button
              color="secondary"
              variant="contained"
              size="large"
              href="/trips"
              sx={{ minWidth: 200, padding: 0.5, marginTop: 1 }}
            >
              Change photo
            </Button>
          </div>
          <div className="informacion">
            <div>
              aqui va info a lado del avatar
            </div>
          </div>
        </div>
        <div className="buttonTrips">
          <div>
          <Button
              color="secondary"
              variant="contained"
              size="large"
              href="/trips"
              sx={{ minWidth: 200,}}
            >
              My Trips
            </Button>
          </div>
        </div>
        <div className="buttonPackage">
          <div>
          <Button
              color="secondary"
              variant="contained"
              size="large"
              href="/packages"
              sx={{ minWidth: 200,}}
            >
              My Packages
            </Button>
          </div>
        </div>
      </div>  
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Profile);