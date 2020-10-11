import React from "react";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import RegisterUserForm from "../components/RegisterUserForm";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    minHeight: "100vh",
  },

  mainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexFlow: "column",
    paddingTop: 50,
    paddingBottom: 25,
  },
  divider: {
    marginTop: 50,
    width: "100%",
    backgroundColor: "#aaa",
    marginBottom: 25,
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item xs={2} sm={3} />
        <Grid item xs={8} sm={6} className={classes.mainContainer}>
          <Grid container>
            <Grid item xs={12}>
              <RegisterUserForm />
            </Grid>
            <Grid xs={12}>
              <Divider variant="fullWidth" className={classes.divider} />
              <Typography variant="body1" align="center">
                Copyright © 2020. All rights reserved
              </Typography>
              <Typography variant="body1" align="center">
                Made with love by
                {" "}
                <a href="http://eaglestack.azurewebsites.net/">Eaglestack</a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} sm={3} />
      </Grid>
    </>
  );
};

export default Home;
