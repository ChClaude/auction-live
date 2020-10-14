import React from "react";
import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";

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

  footerContainer: {
    marginTop: 50,
  },
}));

const Login: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root} alignItems="center">
        <Grid item xs={2} sm={3} />
        <Grid item xs={8} sm={6} className={classes.mainContainer}>
          <Grid container>
            <Grid item xs={12}>
              <LoginForm />
            </Grid>
            <Grid item xs={12} className={classes.footerContainer}>
              <Footer />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} sm={3} />
      </Grid>
    </>
  );
};

export default Login;
