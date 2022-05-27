import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";
import * as PATHS from "../../utils/paths";

const rightLink = {
  fontSize: 16,
  color: "#ff4081",
  ml: 3,
};

function AppAppBar(props) {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="#ff4081"
            href="/"
            sx={{ fontSize: 24 }}
          >
            {"EASY TRAVEL "}
          </Link>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>

          { props?.user && (
            <>
                <Link
                variant="h6"
                underline="none"
                href='/profile'
                sx={{ ...rightLink, color: "#ff4081" }}

                >{ props?.user?.username }</Link>
                <Link
                variant="h6"
                underline="none"
                href='/trips'
                sx={{ ...rightLink, color: "#ff4081" }}
                >
                {"my trips"}
                </Link>

                <Link
                variant="h6"
                underline="none"
                href= {PATHS.LOGINPAGE}
                onClick={props.handleLogout}
                sx={{ ...rightLink, color: "#ff4081" }}
                >
                {"Log Out"}
                </Link>
            </>
          )}



            { !props?.user && (
            <>
            <Link
              color="black"
              variant="h6"
              underline="none"
              href={PATHS.LOGINPAGE}
              sx={rightLink}
            >
              {"Sign In"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href={PATHS.SIGNUPPAGE}
              sx={{ ...rightLink, color: "#ff4081" }}
            >
              {"Sign Up"}
            </Link>
            </>
            )}

              
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
