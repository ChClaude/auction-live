import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {
  ErrorMessage, Field, FieldProps, Form, Formik,
} from "formik";
import { FormControl } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";

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

const validate = {};

const RegisterUserForm: React.FC = () => {
  const classes = useStyles();

  const handleOnRegister = () => console.log("register");

  return (
    <>
      <Typography variant="h4" align="center">
        Champion AUCTIONEERS
      </Typography>
      <Typography variant="h6" align="center">
        Get Started Below
      </Typography>
      <Formik
        initialValues={{
          username: "",
          firstname: "",
          lastname: "",
          cellphone: "",
          email: "",
          bankName: "",
          accountType: "",
          accountNumber: "",
          password: "",
          confirmPassword: "",
        }}
        validate={(values) => {
          console.log(values);
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);

          handleOnRegister();
        }}
      >
        {({ isSubmitting }) => (
          <Form className={classes.root}>
            <Field
              name="username"
            >
              {({ field }: FieldProps) => (
                <TextField
                  {...field}
                  label="Username"
                  type="text"
                  className={classes.textField}
                  variant="filled"
                  required
                />
              )}
            </Field>
            <ErrorMessage name="username" component="div" />

            <Field
              name="firstname"
            >
              {({ field }: FieldProps) => (
                <TextField
                  {...field}
                  label="Firstname"
                  type="text"
                  variant="filled"
                  className={classes.textField}
                  required
                />
              )}
            </Field>
            <ErrorMessage name="firstname" component="div" />

            <Field
              name="lastname"
            >
              {({ field }: FieldProps) => (
                <TextField
                  {...field}
                  label="Lastname"
                  type="text"
                  variant="filled"
                  className={classes.textField}
                  required
                />
              )}
            </Field>
            <ErrorMessage name="lastname" component="div" />

            <Field
              name="cellphone"
            >
              {({ field }: FieldProps) => (
                <TextField
                  {...field}
                  label="Cellphone"
                  type="tel"
                  variant="filled"
                  className={classes.textField}
                  required
                />
              )}
            </Field>
            <ErrorMessage name="cellphone" component="div" />

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
                  required
                />
              )}
            </Field>
            <ErrorMessage name="email" component="div" />

            <Field
              name="bankName"
            >
              {({ field }: FieldProps) => (
                <TextField
                  {...field}
                  label="Bank name"
                  type="text"
                  variant="filled"
                  className={classes.textField}
                  required
                />
              )}
            </Field>
            <ErrorMessage name="bankName" component="div" />

            <Field
              name="accountType"
              as="div"
            >
              {({ field }: FieldProps) => (
                <FormControl
                  variant="filled"
                  className={clsx(classes.formControl, classes.textField)}
                  required
                >
                  <InputLabel>Account Type</InputLabel>
                  <Select
                    {...field}
                    labelId="account type"
                  >
                    <MenuItem value="check">Check</MenuItem>
                    <MenuItem value="savings">Savings</MenuItem>
                  </Select>
                </FormControl>
              )}
            </Field>
            <ErrorMessage name="accountType" component="div" />

            <Field
              name="accountNumber"
            >
              {({ field }: FieldProps) => (
                <TextField
                  {...field}
                  label="Account Number"
                  type="text"
                  className={classes.textField}
                  variant="filled"
                  required
                />
              )}
            </Field>
            <ErrorMessage name="accountNumber" component="div" />

            <Field
              name="password"
            >
              {({ field }: FieldProps) => (
                <TextField
                  {...field}
                  label="Password"
                  type="password"
                  autoComplete="new-password"
                  className={classes.textField}
                  variant="filled"
                  required
                />
              )}
            </Field>
            <ErrorMessage name="password" component="div" />

            <Field
              name="confirmPassword"
            >
              {({ field }: FieldProps) => (
                <TextField
                  {...field}
                  label="Confirm Password"
                  type="password"
                  autoComplete="new-password"
                  className={classes.textField}
                  variant="filled"
                  required
                />
              )}
            </Field>
            <ErrorMessage name="confirmPassword" component="div" />

            <Button variant="contained" color="primary" type="submit">
              Register
            </Button>
          </Form>
        )}
      </Formik>
      <Grid container style={{ marginTop: 10 }}>
        <Grid item xs={6} className={classes.loginContainer}>
          <Typography variant="body1" color="secondary" style={{ marginRight: 10 }}>or</Typography>
          <Button variant="contained" color="secondary" type="submit">
            Log in
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default RegisterUserForm;
