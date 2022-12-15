import { PROFILE_API } from "../utils/constants/API";
import { HONORS_PATH } from "../utils/constants/Config";

export const CreateHonors = (params) => {
  const { token, data } = { ...params };

  axios
    .post(`${PROFILE_API}${HONORS_PATH}`, data, {
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

export const DeleteHonors = (params) => {
  const { token, id } = { ...params };

  axios
    .delete(`${PROFILE_API}${HONORS_PATH}/${id}`, {
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

export const UpdateHonors = (params) => {
  const { token, id, data } = { ...params };

  axios
    .put(`${PROFILE_API}${HONORS_PATH}/${id}`, data, {
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
