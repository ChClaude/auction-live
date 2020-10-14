import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {
  Field, FieldProps, Form, Formik,
} from "formik";
import * as Yup from "yup";
import Grid from "@material-ui/core/Grid";
import { Link as RouterLink } from "react-router-dom";
import { auth } from "../firebase";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    display: "inline-block",
    minWidth: "100%",
    marginTop: theme.spacing(1),
  },

  textField: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },

  formControl: {
    width: "100%",
  },

  loginContainer: {
    display: "flex",
    alignItems: "baseline",
  },
}));

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(5, "Your password is too Short!")
    .max(50, "Your password is too Long!")
    .required("Required"),
});

const LoginForm: React.FC = () => {
  const classes = useStyles();

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <>
      <Typography variant="h4" align="center">
        Champion AUCTIONEERS
      </Typography>
      <Typography variant="h6" align="center">
        Welcome
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          auth.signInWithEmailAndPassword(values.email, values.password).catch((authError) => {
            console.error(`${authError.message} with code ${authError.code}`); // TODO ADD React Toastify
          });

          resetForm({
            values: initialValues,
          });
          setSubmitting(false);
        }}
      >
        {({ errors }) => (
          <Form className={classes.root}>
            <Field
              name="email"
            >
              {({ field }: FieldProps) => (
                <TextField
                  {...field}
                  label="Email"
                  type="email"
                  variant="filled"
                  className={classes.textField}
                  error={!!errors.email}
                  helperText={errors.email}
                  required
                />
              )}
            </Field>

            <Field
              name="password"
            >
              {({ field }: FieldProps) => (
                <TextField
                  {...field}
                  label="Password"
                  helperText={errors.password}
                  type="password"
                  autoComplete="new-password"
                  variant="filled"
                  error={!!errors.password}
                  className={classes.textField}
                  required
                />
              )}
            </Field>

            <Button variant="contained" color="primary" type="submit">
              Log in
            </Button>
          </Form>
        )}
      </Formik>
      <Grid container style={{ marginTop: 10 }}>
        <Grid item xs={6} className={classes.loginContainer}>
          <Typography variant="body1" color="secondary" style={{ marginRight: 10 }}>or</Typography>
          <Button variant="contained" onClick={(event: React.SyntheticEvent) => event.preventDefault()}>
            <RouterLink to="/">
              Register
            </RouterLink>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginForm;
