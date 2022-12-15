import axios from "axios";
import { useEffect } from "react";
import { PROFILE_API } from "../utils/constants/API";
import {
  ACCOUNTS_PATH,
  AWARDS_PATH,
  CERTIFICATE_PATH,
  HONORS_PATH,
  RESIDENCIES_PATH,
  SKILLS_PATH,
  WORK_EXPERIENCE_PATH,
} from "../utils/constants/Config";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const getSelectorsByTag = (tag) => {
  return;
};
const tags = [
  "occupations",
  "certifications",
  "honors",
  "awards",
  "skills",
  "skills_account",
  "countries",
];
export const useApplicationData = () => {
  const accountId = useSelector((state) => state.authToken.accountId);
  const authToken = useSelector((state) => state.authToken.token);
  const navigate = useNavigate();

  const getRequestOptions = (url, method, tag = "", data = null) => {
    return {
      url: url,
      method: method,
      getData: () => {
        const formData = new FormData();
        if (data) {
          for (const key of Object.keys(data?.[tag]))
            formData.append(key, data[tag][key]);
        }
        formData.append("account_id", sessionStorage.getItem("accountId"));

        return formData;
      },
    };
  };

  function makeRequest(
    tag,
    successCallBack,
    failedCallBack = () => {},
    data,
    url = null
  ) {
    const urlMethods = {
      occupations: getRequestOptions(
        `${PROFILE_API}${WORK_EXPERIENCE_PATH}/`,
        "POST",
        "occupations",
        data
      ),
      certifications: getRequestOptions(
        `${PROFILE_API}${CERTIFICATE_PATH}/`,
        "POST",
        "certifications",
        data
      ),
      honors: getRequestOptions(
        `${PROFILE_API}${HONORS_PATH}/`,
        "POST",
        "honors",
        data
      ),
      awards: getRequestOptions(
        `${PROFILE_API}${AWARDS_PATH}/`,
        "POST",
        "awards",
        data
      ),
      skills: getRequestOptions(
        `${PROFILE_API}${SKILLS_PATH}/`,
        "POST",
        "skills",
        data
      ),
      skills_account: getRequestOptions(url, "POST", "skills_account", data),
      all_accounts: getRequestOptions(`${PROFILE_API}${ACCOUNTS_PATH}/`, "GET"),
      all_countries: getRequestOptions(
        `${PROFILE_API}${RESIDENCIES_PATH}/`,
        "GET"
      ),
      countries: getRequestOptions(url, "POST", "countries", data),
      all_accounts_country: getRequestOptions(url, "GET"),
    };
    axios({
      url: urlMethods[tag].url,
      method: urlMethods[tag].method,
      data: urlMethods[tag]["getData"]() ?? null,
      headers: { Authorization: sessionStorage.getItem("authToken") },
    })
      .then((response) => {
        successCallBack(response);
        url ??
          console.log(
            `URL: ${urlMethods[tag].method.toUpperCase()} ${
              urlMethods[tag].url
            } and RESPONSE: ${JSON.parse(response.data)}`
          );
      })
      .catch((e) => {
        if (e.response.status === 401) navigate("/signin");
        else failedCallBack();
      });
  }

  return {
    makeRequest,
    tags,
  };
};

export default useApplicationData;
