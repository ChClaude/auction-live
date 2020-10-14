import React from "react";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => createStyles({
  divider: {
    marginTop: 50,
    width: "100%",
    backgroundColor: "#aaa",
    marginBottom: 25,
  },
}));

const Footer : React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Divider variant="fullWidth" className={classes.divider} />
      <Typography variant="body1" align="center">
        Copyright © 2020. All rights reserved
      </Typography>
      <Typography variant="body1" align="center">
        Made with love by
        {" "}
        <a href="http://eaglestack.azurewebsites.net/">Eaglestack</a>
      </Typography>
    </>
  );
};

export default Footer;
