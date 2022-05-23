import * as React from "react";
import AppFooter from "../modules/views/AppFooter";
import AppAppBar from "../modules/views/AppAppBar";
import withRoot from "../modules/withRoot";
import Typography from "../modules/components/Typography";
import { Container } from "@mui/system";

function Tips() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        <div className="container" >
          <div>
          <Typography variant="h5" align="justify" sx={{ marginTop: 7, float:'left' }}>
          We know that we always want to make the most of our vacations,
          that's why we leave you these tips so that you can choose wisely and
          save money 
          by planning your trip.
        </Typography>
          </div>
          <div sx={{ marginTop: 7, float:'left' }}>
           <img src="/images/cerezos.jpg" alt="cerezos"/>
          </div>
        

        </div>
        
        <React.Fragment>
          <Typography
            variant="h5"
            color="#ff4081"
            paragraph
            sx={{ marginTop: 5 }}
          >
            TRAVEL TIPS
          </Typography>
          <Typography variant="body1" align="justify">
            1.- Consider the season in which you will travel, if the weather is
            what you expect or if there is a special holiday.
            <br />
            2.- When packing your suitcase, consider the days you will be and
            organize your outfits in bed separately, before putting them in, in
            this way you will not forget anything.
            <br />
            3.- In addition to taking your medicines and creams that you use
            daily, do not forget to always pack repellent and biodegradable
            sunscreen.
            <br />
            4.-Wherever you go, do not forget to take a copy of your documents
            such as credential and others that you may require, leave them
            somewhere safe in your suitcase, in case you lose your wallet. Also,
            always carry a contact number with you.
            <br />
            5.- Do not forget to talk to the local people, no matter how much
            technology you have or have a guide, the best information will
            always be given to you by the people who live in that place.
            <br />
            6.- Do not buy too many souvenirs, buy only those that you are sure
            you will only find in that place. If you travel abroad, a very
            special souvenir is the coins or bills of that nationality.
            <br />
            7.- Treat your destination as if it were your own home, do not
            litter, respect the monuments and their customs. Be a good traveler
            in every way.
            <br />
            8.- Do not forget to put a market on the list of places to visit in
            your destination. You will be surprised when you visit them because
            they thoroughly show the customs of the place.
            <br />
            9.- Enjoy your destination intensely, disconnect from the phone for
            a day, leave messages, mails and everything for later, relax
            naturally.
            <br />
            10.- Return from the trip a day before you have to return to work if
            possible, so you will not have time to rest from the trip and
            assimilate your return to the routine.
          </Typography>
        </React.Fragment>

        <React.Fragment>
          <Typography
            variant="h5"
            color="#ff4081"
            paragraph
            sx={{ marginTop: 5 }}
          >
            FLIGHT TIPS
          </Typography>
          <Typography variant="body1" align="justify">
            1.- Buy your flight directly with the airlines, in this way you
            avoid paying commissions that intermediaries charge for selling
            tickets.
            <br />
            2.- Check the calendar mode to view the best prices in the month and
            you can choose the most convenient for you.
            <br />
            3.- Delete cookies or use the incognito mode so that there is no
            record of your search and the airlines do not record your visit and
            can raise prices.
            <br />
            4.- Compare round-trip flight prices separately before choosing a
            round-trip flight in a single purchase.
            <br />
            5.- Plan your luggage to choose the correct flight plan and do not
            pay extras for exceeding the allowed weight.
          </Typography>
        </React.Fragment>

        <React.Fragment>
          <Typography
            variant="h5"
            color="#ff4081"
            paragraph
            sx={{ marginTop: 5 }}
          >
            TIPS FOR HOTELS
          </Typography>
          <Typography variant="body1" align="justify">
            1.- The simplest advice is perhaps the one that will allow you to
            get even cheaper hotels than normal, usually the travel seasons are
            divided into three: High, low and medium. The highest prices will
            always be in low season, so you can choose to travel in low season.
            <br />
            2.- The advice to book in advance is perhaps the second most common
            advice to get cheap hotels that is usually given but I think that
            few people understand why, booking in advance gives you the
            opportunity to have more options to choose from.
            <br />
            3.- If it is possible to move your travel days, try to make them
            from Sunday to Wednesday, these days you will find the cheapest
            hotel prices.
            <br />
            4.- I know that it is very tempting to be close to all the action,
            but this also means that staying in the city center or near tourist
            attractions increases the price of hotels considerably.
            <br />
            5.- Before clicking the reserve button and getting carried away by
            the super price that appears on the screen, make sure you read the
            fine print to see if there are no hidden costs.
            <br />
          </Typography>
        <Typography variant="h4" textAlign="center" color="#8bc34a" sx={{ marginTop: 7 }}>
        ENJOY YOUR TRIP!
        </Typography>
        </React.Fragment>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Tips);
