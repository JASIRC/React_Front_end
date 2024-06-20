import React, { useState, useContext, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Data } from "../App";
import { toast } from "react-hot-toast";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000/cado">
        Cado
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(Data);
  const [showAlert, setShowAlert] = useState("");

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const password = watch("password");

  const submit = (e) => {
    setShowAlert(true);
    console.log(e);
    try {
      const newUser = { ...e, cart: [] };
      setUserData([...userData, newUser]);
      toast.success("Registration successful!");
      navigate("/signin");
    } catch (error) {
      console.error("Sign-in error:", error.message);
      toast.success("Sign-in failed... Please try again...");
    } finally {
      setShowAlert(false);
    }

    console.log(userData);
  };
  useEffect(() => {
    if (showAlert) {
      setShowAlert(false);
    }
  }, [showAlert, navigate]);

  return (
    <div
      style={{
        backgroundImage: `url('./cover9.avif')`,
        backgroundSize: "120%",
      }}
    >
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ m: 1, bgcolor: "secondary.main" }}
              style={{ width: "125px", height: "125px" }}
              onClick={() => navigate("/cado")}
            >
              <img src="/favicon.ico" alt="cado" />
            </Avatar>
            <Typography component="h1" variant="h4">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(submit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="firstname"
                    control={control}
                    rules={{
                      required: "First Name Required",
                      minLength: {
                        value: 4,
                        message: "First Name Should be at least 4 Characters",
                      },
                      maxLength: {
                        value: 16,
                        message: "First Name Maximum 16 Characters",
                      },
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "Invalid characters in the First Name",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        placeholder="First Name"
                        InputLabelProps={{ style: { color: "Black" } }}
                      />
                    )}
                  />
                  {errors.firstname && (
                    <span style={{ color: "red" }}>
                      {errors.firstname.message}
                    </span>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="lastname"
                    control={control}
                    rules={{
                      required: "Last Name Required",
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: "Invalid characters in the Last Name",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        autoComplete="family-name"
                        placeholder="Last Name"
                        InputLabelProps={{ style: { color: "Black" } }}
                      />
                    )}
                  />
                  {errors.lastname && (
                    <span style={{ color: "red" }}>
                      {errors.lastname.message}
                    </span>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: "Email Required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Email is not Valid",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        id="email"
                        type="email"
                        label="Email Address"
                        autoComplete="email"
                        placeholder="example@gmail.com"
                        InputLabelProps={{ style: { color: "Black" } }}
                      />
                    )}
                  />
                  {errors.email && (
                    <span style={{ color: "red" }}>{errors.email.message}</span>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="mobilenumber"
                    control={control}
                    defaultValue="+91"
                    rules={{
                      required: "Mobile Number Required",
                      minLength: {
                        value: 12,
                        message: "Mobile Number Should be 10 Digits",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        id="mobile-number"
                        label="Mobile Number"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="mobile number"
                        placeholder="+91"
                        InputLabelProps={{ style: { color: "Black" } }}
                        onChange={(e) => {
                          const inputValue = e.target.value.replace(/\D/g, "");
                          if (inputValue.length <= 12) {
                            field.onChange({
                              target: {
                                name: field.name,
                                value: inputValue || "+91",
                              },
                            });
                          }
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Backspace" && field.value === "+91") {
                            e.preventDefault();
                          }
                        }}
                      />
                    )}
                  />
                  {errors.mobilenumber && (
                    <span style={{ color: "red" }}>
                      {errors.mobilenumber.message}
                    </span>
                  )}
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Controller
                    name="age"
                    control={control}
                    rules={{
                      required: "Age Required",
                      min: { value: 1, message: "Invalid Age" },
                      minLength: { value: 1 - 3, message: "Invalid Age" },
                      max: { value: 150, message: "Invalid Age" },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        id="age"
                        type="number"
                        label="Age"
                        autoComplete="age"
                        placeholder="Age"
                        InputLabelProps={{ style: { color: "Black" } }}
                      />
                    )}
                  />
                  {errors.age && (
                    <span style={{ color: "red" }}>{errors.age.message}</span>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="password"
                    control={control}
                    rules={{
                      required: "Password Required",
                      minLength: {
                        value: 8,
                        message: "Password Should be at least 8 Characters",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        name="password"
                        label="Password "
                        type="password"
                        autoComplete="new-password"
                        placeholder="********"
                        InputLabelProps={{ style: { color: "Black" } }}
                      />
                    )}
                  />
                  {errors.password && (
                    <span style={{ color: "red" }}>
                      {errors.password.message}
                    </span>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="confirmpassword"
                    control={control}
                    rules={{
                      required: "Confirm Password Required",
                      validate: (value) =>
                        value === password || "Password do not Match",
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        name="confirmpassword"
                        label="Confirm Password"
                        type="password"
                        autoComplete="new-password"
                        placeholder="********"
                        InputLabelProps={{ style: { color: "Black" } }}
                      />
                    )}
                  />
                  {errors.confirmpassword && (
                    <span style={{ color: "red" }}>
                      {errors.confirmpassword.message}
                    </span>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    href="#"
                    variant="body2"
                    onClick={() => navigate("/signin")}
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}
