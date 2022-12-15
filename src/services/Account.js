import axios from "axios";
import { PROFILE_API } from "../utils/constants/API";

export const CreateStudent = (params) => {
  const { formData, authToken, setLoading, navigate } = { ...params };
  setLoading(true);
  axios
    .post(`${PROFILE_API}${authToken}`, formData)
    .then((response) => {
      console.log("ACCOUNT CREATION SUCCESS RESPONSE", response);
      setLoading(false);
      navigate("/success", { state: { data: response.data } });
    })
    .catch((err) => {
      console.log("ACCOUNT CREATION ERROR RESPONSE", err);
    });
};
