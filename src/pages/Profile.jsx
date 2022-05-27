import * as React from "react";
import AppFooter from "../modules/views/AppFooter";
import AppAppBar from "../modules/views/AppAppBar";
import withRoot from "../modules/withRoot";
import { Avatar } from "@mui/material";
import Button from "../modules/components/Button";
import './profile.css';
import Typography from "../modules/components/Typography";


function Profile(props) {
  console.log(props)
  return (
    <React.Fragment>
      <AppAppBar {...props} />
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

              sx={{ minWidth: 200, padding: 0.5, marginTop: 1 }}
            >
              Change photo
            </Button>
          </div>
          
        </div>
        <div className="buttons">
          <div>
          <Button
              color="secondary"
              variant="contained"
              size="large"
              href="/trips"
              sx={{ minWidth: 200, marginTop: 3, padding: 0.5}}
            >
              My Trips
            </Button>
          </div>
          <div>
            <Button
              color="secondary"
              variant="contained"
              size="large"
              href="/reviews"
              sx={{ minWidth: 200, marginTop: 3, padding: 0.5}}
            >
              CREATE A Review
            </Button>
          </div>
          <div>
            <Button
              color="secondary"
              variant="contained"
              size="large"
              href="/tips"
              sx={{ minWidth: 200, marginTop: 3, padding: 0.5}}
            >
              Travel Tips
            </Button>
          </div>
        </div>
      </div>  
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Profile);