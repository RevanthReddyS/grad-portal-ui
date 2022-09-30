import { isValidPhoneNumber } from "libphonenumber-js";
export const ValidateField = (fieldName, fieldValue) => {
  const fields = {
    email: {
      isError:
        fieldValue === "" ||
        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          fieldValue
        ),
      errorMessage: "Please enter a valid email",
    },
    "password-signup": {
      isError:
        fieldValue === "" ||
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          fieldValue
        ),
      errorMessage:
        "Please enter a password containing *Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character*",
    },
    "password-signin": {
      isError: fieldValue === "",
      errorMessage: "Please enter a password",
    },
    "confirm-password": {
      isError: fieldValue === "",
      errorMessage: "Please confirm the password",
    },
    username: {
      isError: fieldValue === "",
      errorMessage: "Please enter a valid username",
    },
    name: {
      isError: fieldValue === "",
      errorMessage: "Please enter a valid name",
    },
    phonenumber: {
      isError: fieldValue === "" || !isValidPhoneNumber(`+` + fieldValue),
      errorMessage: "Please enter a valid phone number",
    },
  };
  return { [fieldName]: fields[fieldName.toLowerCase()] };
};

// Checks whether all the object values are false
export const CheckIfObjectValueFalse = (obj) => {
  return Object.values(obj).every((item) => !item.isError);
};
