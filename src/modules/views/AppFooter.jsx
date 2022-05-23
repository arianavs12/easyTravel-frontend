import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import CopyrightRoundedIcon from "@mui/icons-material/CopyrightRounded";

const iconStyle = {
  width: 48,
  height: 48,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  mr: 1,
};

export default function AppFooter() {
  return (
    <Typography component="footer" sx={{ display: "flex", bgcolor: "white" }}>
      <Container sx={{ my: 7, display: "flex" }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid item sx={{ display: "flex" }}>
              <Box component="a" href="https://facebook.com/" sx={iconStyle}>
                <img src="/images/facebookicon.png" alt="Facebook" />
              </Box>
              <Box component="a" href="https://twitter.com" sx={iconStyle}>
                <img src="/images/twitter.png" alt="Twitter" />
              </Box>
            </Grid>
            <br />
            <Typography>
              Tel. 55 56890009
              <br />
              contact@easytravel.com
            </Typography>
            <br />
            <CopyrightRoundedIcon sx={{ height: "15px" }} />
            Easy Travel 2022
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
