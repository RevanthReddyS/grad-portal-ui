import React, { useState } from "react";
import "./SignIn.scss";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Alert from "@mui/material/Alert";
import AddTaskIcon from "@mui/icons-material/AddTask";
import LoginIcon from "@mui/icons-material/Login";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Toolbar } from "@mui/material";
import axios from "axios";
import {
  CheckIfObjectValueFalse,
  ValidateField,
} from "../../utils/functions/GenericFunctions";
import { LogIn } from "../../services/Authentication";
import { useDispatch } from "react-redux";
import connecting from "../../images/connecting.jpeg";

const theme = createTheme();

//TODO:
// Loading on network call
// Snackbar on successful network call
// Error icon at the end of input on error
// Show and hide eye icon for password field

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNetworkError, seIstNetworkError] = useState(false); // Error flag on network call
  const [networkErrorMessage, setNetworkErrorMessage] = useState(""); // Error messages on network call
  const [errorMessage, setErrorMessage] = useState({}); // Error messages for input fields

  const handleSubmit = (event) => {
    event.preventDefault();

    //if (validateForm()) {
    LogIn({
      email: email,
      password: password,
      navigate: navigate,
      dispatch: dispatch,
      seIstNetworkError: seIstNetworkError,
      setNetworkErrorMessage: setNetworkErrorMessage,
    });
  };

  const validateForm = () => {
    seIstNetworkError(false);
    setNetworkErrorMessage("");
    let errorMessages = {};
    let validateEmailResponse = ValidateField("email", email);

    if (validateEmailResponse["email"].isError) {
      errorMessages = {
        ...errorMessages,
        ...validateEmailResponse,
      };
    }

    let validatePasswordResponse = ValidateField("password-signin", password);
    if (validatePasswordResponse["password-signin"].isError) {
      errorMessages = {
        ...errorMessages,
        ...validatePasswordResponse,
      };
    }

    setErrorMessage(errorMessages);
    return CheckIfObjectValueFalse(errorMessages);
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email);
    setErrorMessage({
      ...errorMessage,
      email: {
        isError: false,
        errorMessage: "",
      },
    });
    seIstNetworkError(false);
    setNetworkErrorMessage("");
  };

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setPassword(password);
    setErrorMessage({
      ...errorMessage,
      "password-signin": {
        isError: false,
        errorMessage: "",
      },
    });
    seIstNetworkError(false);
    setNetworkErrorMessage("");
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          backgroundImage: `url(${connecting}) no-repeat center center fixed`,
          height: "100%",
        }}
      >
        <Toolbar className="gradportal__signin--toolbar">
          <b className="gradportal__signin--headericon">
            <AddTaskIcon /> GradPortal
          </b>
        </Toolbar>

        <Container
          component="main"
          maxWidth="xs"
          className="gradportal__signin--main"
        >
          <Card className="gradportal__signin--card">
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              className="gradportal__signin--box"
            >
              <AddTaskIcon className="gradportal__signin--icon" />
              <Typography
                component="h2"
                variant="h2"
                fontWeight={"600"}
                fontSize={"30px"}
              >
                Welcome back
              </Typography>
              <Typography
                component="h3"
                variant="h6"
                fontWeight={"200"}
                fontSize={"15px"}
              >
                Please sign in to continue
              </Typography>
              {isNetworkError && (
                <Alert severity="error" className="gradportal__signin--error">
                  {networkErrorMessage}
                </Alert>
              )}
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 3 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email_address"
                  size="small"
                  autoComplete="email"
                  autoFocus
                  onChange={handleEmailChange}
                  value={email}
                  error={errorMessage["email"]?.isError}
                  helperText={errorMessage["email"]?.errorMessage}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  size="small"
                  autoComplete="current-password"
                  value={password}
                  onChange={handlePasswordChange}
                  error={errorMessage["password-signin"]?.isError}
                  helperText={errorMessage["password-signin"]?.errorMessage}
                />

                {/* <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    className="gradportal__signin--checkbox"
                  />
                }
                label="Remember me"
              /> */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  className="gradportal__signin--button"
                  startIcon={<LoginIcon />}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Card>
          {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container>
      </div>
    </ThemeProvider>
  );
};
export default SignIn;
