import { PROFILE_API } from "../utils/constants/API";
import { AWARDS_PATH } from "../utils/constants/Config";

export const CreateAwards = (params) => {
  const { token, data } = { ...params };

  axios
    .post(`${PROFILE_API}${AWARDS_PATH}`, data, {
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

export const DeleteAwards = (params) => {
  const { token, id } = { ...params };

  axios
    .delete(`${PROFILE_API}${AWARDS_PATH}/${id}`, {
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

export const UpdateAwards = (params) => {
  const { token, id, data } = { ...params };

  axios
    .put(`${PROFILE_API}${AWARDS_PATH}/${id}`, data, {
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
