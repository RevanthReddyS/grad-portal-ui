import React, { useState } from "react";
import "./SignUp.scss";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddTaskIcon from "@mui/icons-material/AddTask";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Toolbar } from "@mui/material";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  CheckIfObjectValueFalse,
  ValidateField,
} from "../../utils/functions/GenericFunctions";
import { Register } from "../../services/Authentication";
import { useDispatch } from "react-redux";
import { REQUEST_BODY_KEYS } from "../../utils/objects/Backend";

const theme = createTheme();

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [summary, setSummary] = useState("");
  const [errorMessage, setErrorMessage] = useState({}); // Error messages for input fields
  const [isNetworkError, seIstNetworkError] = useState(false); // Error messages on network call
  const [networkErrorMessage, setNetworkErrorMessage] = useState(""); // Error flag on network call
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // if (validateForm()) {
    Register({
      email: email,
      password: password,
      navigate: navigate,
      dispatch: dispatch,
      data: data,
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

    let validatePasswordResponse = ValidateField("password-signup", password);
    if (validatePasswordResponse["password-signup"].isError) {
      errorMessages = {
        ...errorMessages,
        ...validatePasswordResponse,
      };
    }
    let validateConfirmPasswordResponse = ValidateField(
      "confirm-password",
      confirmPassword
    );
    if (validateConfirmPasswordResponse["confirm-password"].isError) {
      errorMessages = {
        ...errorMessages,
        ...validateConfirmPasswordResponse,
      };
    }

    let validateNameResponse = ValidateField("name", name);
    if (validateNameResponse["name"].isError) {
      errorMessages = {
        ...errorMessages,
        ...validateNameResponse,
      };
    }

    let validateUserNameResponse = ValidateField("username", firstName);
    if (validateUserNameResponse["username"].isError) {
      errorMessages = {
        ...errorMessages,
        ...validateUserNameResponse,
      };
    }
    let validatePhoneNumberResponse = ValidateField("phonenumber", phone);
    if (validatePhoneNumberResponse["phonenumber"].isError) {
      errorMessages = {
        ...errorMessages,
        ...validatePhoneNumberResponse,
      };
    }
    let isPasswordSame = password === confirmPassword;
    if (!isPasswordSame) {
      errorMessages = {
        ...errorMessages,
        "confirm-password": {
          isError: true,
          errorMessage: "Confirm Password and Password does not match",
        },
      };
    }
    setErrorMessage(errorMessages);
    return CheckIfObjectValueFalse(errorMessages) && isPasswordSame;
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
      "password-signup": {
        isError: false,
        errorMessage: "",
      },
    });
    seIstNetworkError(false);
    setNetworkErrorMessage("");
  };

  const handleConfirmPasswordChange = (event) => {
    const confirmPassword = event.target.value;
    setConfirmPassword(confirmPassword);
    if (password !== confirmPassword) {
      setErrorMessage({
        ...errorMessage,
        "confirm-password": {
          isError: true,
          errorMessage: "Confirm Password and Password does not match",
        },
      });
    } else {
      setErrorMessage({
        ...errorMessage,
        "confirm-password": {
          isError: false,
          errorMessage: "",
        },
      });
    }
    seIstNetworkError(false);
    setNetworkErrorMessage("");
  };

  const handleFirstNameChange = (event) => {
    const name = event.target.value;

    setFirstName(name);

    setErrorMessage({
      ...errorMessage,
      name: {
        isError: false,
        errorMessage: "",
      },
    });
    seIstNetworkError(false);
    setNetworkErrorMessage("");
  };
  const handleLastNameChange = (event) => {
    const name = event.target.value;

    setLastName(name);

    setErrorMessage({
      ...errorMessage,
      name: {
        isError: false,
        errorMessage: "",
      },
    });
    seIstNetworkError(false);
    setNetworkErrorMessage("");
  };

  const handlePhoneNumberChange = (event) => {
    const phone = event.target.value;
    setPhone(phone);
    setErrorMessage({
      ...errorMessage,
      phonenumber: {
        isError: false,
        errorMessage: "",
      },
    });
    seIstNetworkError(false);
    setNetworkErrorMessage("");
  };

  const handleSummaryChange = (event) => {
    const summary = event.target.value;

    setSummary(summary);

    setErrorMessage({
      ...errorMessage,
      name: {
        isError: false,
        errorMessage: "",
      },
    });
    seIstNetworkError(false);
    setNetworkErrorMessage("");
  };

  return (
    <ThemeProvider theme={theme}>
      <Toolbar className="gradportal__signup--toolbar">
        <b className="gradportal__signup--headericon">
          <AddTaskIcon /> Grad Portal
        </b>
      </Toolbar>

      <Container
        component="main"
        maxWidth="xs"
        className="gradportal__signup--main"
      >
        <Card className="gradportal__signup--card">
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            className="gradportal__signup--box"
          >
            <AddTaskIcon className="gradportal__signup--icon" />
            <Typography
              component="h2"
              variant="h2"
              fontWeight={"600"}
              fontSize={"30px"}
            >
              Create your account
            </Typography>
            <Typography
              component="h3"
              variant="h6"
              fontWeight={"200"}
              fontSize={"15px"}
            >
              You are one step away from creating your profile
            </Typography>
            {isNetworkError && (
              <Alert severity="error" className="gradportal__signup--error">
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
                autoComplete="user-name"
                margin="normal"
                name={REQUEST_BODY_KEYS["firstName"]}
                required
                fullWidth
                id="firstname"
                size="small"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={handleFirstNameChange}
                error={errorMessage["name"]?.isError}
                helperText={errorMessage["name"]?.errorMessage}
              />
              <TextField
                autoComplete="user-name"
                margin="normal"
                name={REQUEST_BODY_KEYS["lastName"]}
                required
                fullWidth
                id="lastname"
                size="small"
                label="Last Name"
                autoFocus
                value={lastName}
                onChange={handleLastNameChange}
                error={errorMessage["name"]?.isError}
                helperText={errorMessage["name"]?.errorMessage}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password-signup"
                label="Password"
                type="password"
                id="password-signup"
                size="small"
                autoComplete="current-password"
                value={password}
                onChange={handlePasswordChange}
                error={errorMessage["password-signup"]?.isError}
                helperText={errorMessage["password-signup"]?.errorMessage}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirm-password"
                label="Confirm Password"
                type="password"
                id="confirm-password"
                size="small"
                autoComplete="confirm-password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                error={errorMessage["confirm-password"]?.isError}
                helperText={errorMessage["confirm-password"]?.errorMessage}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name={REQUEST_BODY_KEYS["email"]}
                size="small"
                autoComplete="email"
                onChange={handleEmailChange}
                value={email}
                error={errorMessage["email"]?.isError}
                helperText={errorMessage["email"]?.errorMessage}
              />
              {/* <TextField
                autoComplete="tel"
                margin="normal"
                required
                name="phonenumber"
                fullWidth
                id="phonenumber"
                size="small"
                label="Phone Number (with country code)"
                onChange={handlePhoneNumberChange}
                value={phone}
                error={errorMessage["phonenumber"]?.isError}
                helperText={errorMessage["phonenumber"]?.errorMessage}
              /> */}
              <TextField
                autoComplete="text"
                margin="normal"
                name={REQUEST_BODY_KEYS["summary"]}
                fullWidth
                id="summary"
                size="small"
                label="Summary"
                onChange={handleSummaryChange}
                value={summary}
                error={errorMessage["phonenumber"]?.isError}
                helperText={errorMessage["phonenumber"]?.errorMessage}
              />
              {/* <PhoneInput
                country={"us"}
                value={null}
                onChange={() => {}}
                placeholder="Phone Number"
                required
              /> */}
              {/* <FormControlLabel
                control={
                  <Checkbox
                    value="remember"
                    className="gradportal__signup--checkbox"
                  />
                }
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className="gradportal__signup--button"
                startIcon={<ExitToAppIcon />}
              >
                Sign Up
              </Button>
              <div className="gradportal__signup--signinlink">
                <Link href="/signin" variant="body2">
                  {"Already have an account? Sign in"}
                </Link>
              </div>
            </Box>
          </Box>
        </Card>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
};
export default SignUp;
