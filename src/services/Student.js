import axios from "axios";
import { STUDENT_API } from "../utils/constants/API";

export const CreateStudent = (
  formData,
  authToken,
  setLoading,
  navigate = null
) => {
  setLoading(true);
  axios
    .post(`${STUDENT_API}${authToken}`, formData)
    .then((response) => {
      console.log("student post response", response);
      setLoading(false);
      navigate("/success", { state: { data: response.data } });
    })
    .catch((err) => {
      console.log("student post error", err);
    });
};
