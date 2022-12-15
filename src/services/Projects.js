import { PROFILE_API } from "../utils/constants/API";
import { PROJECTS_PATH } from "../utils/constants/Config";

export const CreateProjects = (params) => {
  const { token, data } = { ...params };

  axios
    .post(`${PROFILE_API}${PROJECTS_PATH}`, data, {
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

export const DeleteProjects = (params) => {
  const { token, id } = { ...params };

  axios
    .delete(`${PROFILE_API}${PROJECTS_PATH}/${id}`, {
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

export const UpdateProjects = (params) => {
  const { token, id, data } = { ...params };

  axios
    .put(`${PROFILE_API}${PROJECTS_PATH}/${id}`, data, {
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
