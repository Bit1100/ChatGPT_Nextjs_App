import sys_cnf from "@/system/config/config";
import logOutUser from "./logOutUser";
import getCurrentLine from "get-current-line";
import Cookies from "js-cookie";

var getUser = function () {
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
    var token, uid, user;

    if (sys_error == 0) {
      try {
        /* Get the cookies */
        token =
          Cookies.get("lid") !== undefined && Cookies.get("lid") !== ""
            ? Cookies.get("lid")
            : null;
        user =
          Cookies.get("user") !== undefined && Cookies.get("user") !== ""
            ? Cookies.get("user")
            : null;

        /* Set the User */
        var userDetail = {};
        if (
          user != null &&
          user.length > 0 &&
          user != "null" &&
          user != "undefined"
        ) {
          userDetail = JSON.parse(user);
        } else {
          userDetail = {
            fname: "User",
            lname: "Name",
          };
        }

        /* Set Token */
        if (
          token != null &&
          token.length > 0 &&
          token != "null" &&
          token != "undefined"
        ) {
          // continue
        } else {
          token = null;
        }

        /* Set the response if everything exists*/
        if (
          token != null &&
          token.length > 0 &&
          user != null &&
          user.length > 0
        ) {
          sys_response = {
            status: 1,
            message: "User detail",
            data: { lid: token, user: userDetail },
            code: 200,
            ev: getCurrentLine().line,
          };
        } else {
          sys_error = 1;
          sys_response = {
            status: 0,
            message: "Unauthorized User",
            data: {},
            code: 400,
            ev: getCurrentLine().line,
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

  if (sys_error == 1) {
    logOutUser();
  }

  return sys_response;
};

export default getUser;
