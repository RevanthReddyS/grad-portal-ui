import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { storeToken } from "../redux/reducers/AuthReducer";
import { firebaseConfig } from "../utils/objects/Firebase";

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const SignIn = (email, password, dispatch) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("auth token", user.accessToken);
      dispatch(storeToken(user.accessToken));
    })
    .catch((err) => {
      console.log("error while getting auth token", err);
    });
};
