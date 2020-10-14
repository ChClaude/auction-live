import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {
  Field, FieldProps, Form, Formik,
} from "formik";
import { FormControl } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import * as Yup from "yup";
import FormHelperText from "@material-ui/core/FormHelperText";
import { auth, db } from "../firebase";

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

type SignUpFormType = {
  onSignUp: () => void;
};

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    // .matches(/^[A-Z]i/, "The username must contain alphabetical letters")
    .required("Required"),
  firstname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    // .matches(/[A-Z]i/, "The firstname must contain alphabetical letters")
    .required("Required"),
  lastname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    // .matches(/[A-Z]i/, "The lastname must contain alphabetical letters")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  cellphone: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .matches(/[0-9]/, "The cellphone must contain numbers")
    .required("Required"),
  bankName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    // .matches(/[A-Z]i/, "The bank name must contain alphabetical letters")
    .required("Required"),
  accountType: Yup.mixed()
    .oneOf(["check", "savings"], "The account type must be either check or savings")
    .required("The account type is required"),
  accountNumber: Yup.string()
    .min(4, "Too Short!")
    .max(50, "Too Long!")
    // .matches(/[0-9]/, "The account number must contain alphabetical letters")
    .required("Required"),
  password: Yup.string()
    .min(5, "Your password is too Short!")
    .max(50, "Your password is too Long!")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "The passwords must match")
    .required("Required"),
});

const SignUpForm: React.FC<SignUpFormType> = ({ onSignUp }: SignUpFormType) => {
  const classes = useStyles();
  const initialValues = {
    username: "",
    firstname: "",
    lastname: "",
    cellphone: "",
    email: "",
    bankName: "",
    accountType: "check",
    accountNumber: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <>
      <Typography variant="h4" align="center">
        Champion AUCTIONEERS
      </Typography>
      <Typography variant="h6" align="center">
        Get Started Below
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          const user = {
            username: values.username,
            firstname: values.firstname,
            lastname: values.lastname,
            cellphone: values.cellphone,
            email: values.email,
            bankName: values.bankName,
            accountType: values.accountType,
            accountNumber: values.accountNumber,
          };

          auth.createUserWithEmailAndPassword(values.email, values.password)
            .then(() => {
              db.collection("users").doc(values.username)
                .set(user)
                .catch((err) => console.error(err));
            })
            .catch((authError: any) => {
              console.error(`${authError.message} with code ${authError.code}`); // TODO ADD React Toastify
            });

          resetForm({
            values: initialValues,
          });
          setSubmitting(false);
          onSignUp();
        }}
      >
        {({ errors }) => (
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
                  error={!!errors.username}
                  helperText={errors.username}
                  required
                />
              )}
            </Field>

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
                  error={!!errors.firstname}
                  helperText={errors.firstname}
                  required
                />
              )}
            </Field>

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
                  error={!!errors.lastname}
                  helperText={errors.lastname}
                  required
                />
              )}
            </Field>

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
                  error={!!errors.cellphone}
                  helperText={errors.cellphone}
                  required
                />
              )}
            </Field>

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
              name="bankName"
            >
              {({ field }: FieldProps) => (
                <TextField
                  {...field}
                  label="Bank name"
                  type="text"
                  variant="filled"
                  className={classes.textField}
                  error={!!errors.bankName}
                  helperText={errors.bankName}
                  required
                />
              )}
            </Field>

            <Field
              name="accountType"
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
                    error={!!errors.accountType}
                    labelId="account type"
                  >
                    <MenuItem value="check">Check</MenuItem>
                    <MenuItem value="savings">Savings</MenuItem>
                  </Select>
                  <FormHelperText>{errors.accountType}</FormHelperText>
                </FormControl>
              )}
            </Field>

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
                  error={!!errors.accountNumber}
                  helperText={errors.accountNumber}
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
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                  required
                />
              )}
            </Field>

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

export default SignUpForm;
