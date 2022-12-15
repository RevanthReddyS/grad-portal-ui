import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { storeToken } from "../redux/reducers/AuthReducer";
import { firebaseConfig } from "../utils/objects/Firebase";
import axios from "axios";
import { PROFILE_API } from "../utils/constants/API";

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const LogIn = (params) => {
  const {
    email,
    password,
    navigate,
    dispatch,
    seIstNetworkError,
    setNetworkErrorMessage,
  } = { ...params };
  signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      // const user = userCredential.user;
      console.log("auth token", user);
      sessionStorage.setItem("authToken", user.user.accessToken);
      axios
        .get(`${PROFILE_API}/accounts/${email}`, {
          headers: {
            Authorization: user.user.accessToken,
          },
        })
        .then((response) => {
          //dispatch(storeToken(response.data.id));
          sessionStorage.setItem("accountId", response.data[0].id);
          console.log("ACCOUNT LOGIN SUCCESS RESPONSE", response);
          //setLoading(false);
          navigate("/dashboard", { state: { data: response.data[0] } });
        })
        .catch((err) => {
          console.log("ACCOUNT CREATION ERROR RESPONSE", err);
        });

      // dispatch(storeToken(user.accessToken));
    })
    .catch((err) => {
      console.log("ERROR WHILE SIGNING IN", err);
      seIstNetworkError(true);
      setNetworkErrorMessage("Couldn't authenticate with given credentials");
    });
};

export const Register = (params) => {
  const { email, password, navigate, dispatch, data } = { ...params };

  createUserWithEmailAndPassword(auth, email, password)
    .then((user) => {
      // dispatch(storeToken(user.user.accessToken));
      sessionStorage.setItem("authToken", user.user.accessToken);
      data.delete("password-signup");
      data.delete("confirm-password");
      data.append("role_id", 1);
      console.log("REGISTER RESPONSE", user);
      axios
        .post(`${PROFILE_API}/accounts/`, data, {
          headers: {
            Authorization: user.user.accessToken,
          },
        })
        .then((response) => {
          //dispatch(storeToken(response.data.id));
          sessionStorage.setItem("accountId", response.data.id);
          console.log("ACCOUNT CREATION SUCCESS RESPONSE", response);
          //setLoading(false);
          navigate("/dashboard", { state: { data: response.data } });
        })
        .catch((err) => {
          console.log("ACCOUNT CREATION ERROR RESPONSE", err);
        });
    })
    .catch((err) => console.log("ERROR WHILE REGISTERING", err));
};
