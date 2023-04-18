import sys_cnf from "@/system/config/config.js";
import getCurrentLine from "get-current-line";
import axios from "axios";

let getUserSettingWithToken = async function (token) {
  const sys_config = sys_cnf();
  var sys_response = {
    status: 0,
    message: "",
    data: {},
    code: 400,
    ev: getCurrentLine().line,
  };
  var sys_error = 0;

  try {
    if (sys_error == 0) {
      var dataResponse;
      await axios
        .get(`${sys_config.api_req_domain}/api/user/setting/get`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Access-Control-Allow-Origin": "*",
          },
        })
        .then(function (response) {
          dataResponse = response.data;
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

    if (sys_error == 0) {
      if (dataResponse.status == 1) {
        localStorage.setItem(
          "serverSetting",
          JSON.stringify(dataResponse.data)
        );
      } else {
        localStorage.removeItem("serverSetting");
      }
      sys_response = {
        status: dataResponse.status,
        message: dataResponse.message,
        data: dataResponse.data,
        code: dataResponse.code,
      };
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

export default getUserSettingWithToken;
