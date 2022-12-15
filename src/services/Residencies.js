import { PROFILE_API } from "../utils/constants/API";
import { RESIDENCIES_PATH } from "../utils/constants/Config";

export const AssosicateResidencies = (params) => {
  const { token, data } = { ...params };

  axios
    .post(`${PROFILE_API}${RESIDENCIES_PATH}`, data, {
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

export const DeleteResidencies = (params) => {
  const { token, id } = { ...params };

  axios
    .delete(`${PROFILE_API}${RESIDENCIES_PATH}/${id}`, {
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
