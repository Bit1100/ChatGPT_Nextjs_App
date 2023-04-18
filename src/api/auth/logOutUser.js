import getCurrentLine from "get-current-line";
import Cookies from "js-cookie";

let logOutUser = function () {
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
      Cookies.remove("lid");
      Cookies.remove("user");
      localStorage.removeItem("serverSetting");

      sys_response = {
        status: 1,
        message: "You are logout",
        data: {},
        code: 200,
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

export default logOutUser;
