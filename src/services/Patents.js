import { PROFILE_API } from "../utils/constants/API";
import { PATENTS_PATH } from "../utils/constants/Config";

export const CreatePatents = (params) => {
  const { token, data } = { ...params };

  axios
    .post(`${PROFILE_API}${PATENTS_PATH}`, data, {
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

export const DeletePatents = (params) => {
  const { token, id } = { ...params };

  axios
    .delete(`${PROFILE_API}${PATENTS_PATH}/${id}`, {
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

export const UpdatePatents = (params) => {
  const { token, id, data } = { ...params };

  axios
    .put(`${PROFILE_API}${PATENTS_PATH}/${id}`, data, {
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
