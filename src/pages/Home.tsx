import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import RegisterUserForm from "../components/RegisterUserForm";
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minHeight: '100vh',
        },

        formContainer: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexFlow: 'column',
            paddingTop: 50,
            paddingBottom: 50
        }
    }),
);

const Home: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.root}>
                <Grid item xs={2} sm={4}/>
                <Grid item xs={8} sm={4} className={classes.formContainer}>
                    <RegisterUserForm/>
                </Grid>
                <Grid item xs={2} sm={4}/>
            </Grid>
        </>
    );
};

export default Home;