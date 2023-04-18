import sys_cnf from "@/system/config/config.js";
import getCurrentLine from "get-current-line";
import axios from "axios";

let getUserByToken = async function (token) {
  const sys_config = sys_cnf();
  var sys_error = 0;
  var sys_response = {
    status: 0,
    message: "",
    data: {},
    code: 400,
    ev: getCurrentLine().line,
  };
  try {
    if (sys_error == 0) {
      await axios
        .get(`${sys_config.api_req_domain}/api/user/account/user-detail`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then(function (response) {
          sys_response = {
            status: response.data.status,
            message: response.data.message,
            data: response.data.data,
            code: response.data.code,
          };
        })
        .catch(function (error) {
          sys_error = 1;
          sys_response = {
            status: 0,
            message: error.response.data.message,
            data: {},
            code: 400,
            ev: getCurrentLine().line,
          };
        });
    }
  } catch (error) {
    sys_error = 1;
    sys_response = {
      status: 0,
      message: "Something went wrong",
      data: {},
      code: 400,
      ev: getCurrentLine().line,
    };
  }

  return sys_response;
};

export default getUserByToken;
