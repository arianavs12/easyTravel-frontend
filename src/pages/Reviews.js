import * as React from "react";
import AppFooter from "../modules/views/AppFooter";
import AppAppBar from "../modules/views/AppAppBar";
import withRoot from "../modules/withRoot";
//import Typography from '../modules/components/Typography';

function Reviews() {
  return (
    <React.Fragment>
      <AppAppBar />

      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Reviews);
