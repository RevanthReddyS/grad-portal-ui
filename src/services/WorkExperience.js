import { PROFILE_API } from "../utils/constants/API";
import { WORK_EXPERIENCE_PATH } from "../utils/constants/Config";

export const AddWorkExperience = (params) => {
  const { token, data } = { ...params };

  axios
    .post(`${PROFILE_API}${WORK_EXPERIENCE_PATH}`, data, {
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

export const DeleteWorkExperience = (params) => {
  const { token, id } = { ...params };

  axios
    .delete(`${PROFILE_API}${WORK_EXPERIENCE_PATH}/${id}`, {
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

export const UpdateWorkExperience = (params) => {
  const { token, id, data } = { ...params };

  axios
    .put(`${PROFILE_API}${WORK_EXPERIENCE_PATH}/${id}`, data, {
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
