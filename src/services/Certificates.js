import { PROFILE_API } from "../utils/constants/API";
import { CERTIFICATE_PATH } from "../utils/constants/Config";

export const CreateCertificates = (params) => {
  const { token, data } = { ...params };

  axios
    .post(`${PROFILE_API}${CERTIFICATE_PATH}`, data, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      console.log("SUCCESS RESPONSE", response);
    })
    .catch((err) => {
      console.log("ERROR RESPONSE", err);
    });
};

export const Dele = (params) => {
  const { token, id } = { ...params };

  axios
    .delete(`${PROFILE_API}${CERTIFICATE_PATH}/${id}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      console.log("SUCCESS RESPONSE", response);
    })
    .catch((err) => {
      console.log("ERROR RESPONSE", err);
    });
};

export const UpdateCertificates = (params) => {
  const { token, id, data } = { ...params };

  axios
    .put(`${PROFILE_API}${CERTIFICATE_PATH}/${id}`, data, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      console.log("SUCCESS RESPONSE", response);
    })
    .catch((err) => {
      console.log("ERROR RESPONSE", err);
    });
};
