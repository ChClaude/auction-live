import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme)=>
    createStyles({
        root: {
            display: 'inline-block',
            width: '100%',
            marginTop: theme.spacing(1)
        },

        textField: {
            width: '100%',
            marginBottom: theme.spacing(2)
        }
    }),
);

const RegisterUserForm: React.FC = () => {
    const classes = useStyles();

    const handleOnRegister = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log("register");
    };

    return (
        <>
            <Typography variant="h4" >
                Live Auction
            </Typography>
            <Typography variant="h6" >
                Get Started Below
            </Typography>
            <form className={classes.root} onSubmit={handleOnRegister}>
                <TextField
                    name="username"
                    label="Username"
                    type="text"
                    variant="outlined"
                    className={classes.textField}
                    required
                />
                <TextField
                    name="firstname"
                    label="Firstname"
                    type="text"
                    variant="outlined"
                    className={classes.textField}
                    required
                />
                <TextField
                    name="lastname"
                    label="Lastname"
                    type="text"
                    variant="outlined"
                    className={classes.textField}
                    required
                />
                <TextField
                    name="cellphone"
                    label="Cellphone"
                    type="tel"
                    variant="outlined"
                    className={classes.textField}
                    required
                />
                <Button variant="contained" color="primary" type="submit">
                    Register
                </Button>
            </form>
        </>
    );
};

export default RegisterUserForm;