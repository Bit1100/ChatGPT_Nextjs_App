import getCurrentLine from "get-current-line";
import Cookies from "js-cookie";

let saveUserDetail = async function (sys_config, user = {}) {
  var sys_error = 0;
  var sys_respose = {
    status: 0,
    message: "",
    data: {},
    code: 400,
    ev: getCurrentLine().line,
  };
  try {
    if (sys_error == 0) {
      var fname = user.fname;
      var lname = user.lname;
      var email = user.email;
      var token = user.token;
    }

    /* Valid the User */
    if (sys_error == 0) {
      if (fname && fname != null && fname.length > 0) {
        // continue
      } else {
        sys_error = 1;
        sys_respose = {
          status: 0,
          message: "Unauthorized User",
          data: {},
          code: 400,
          ev: getCurrentLine().line,
        };
      }
    }

    if (sys_error == 0) {
      if (lname && lname != null && lname.length > 0) {
        // continue
      } else {
        sys_error = 1;
        sys_respose = {
          status: 0,
          message: "Unauthorized User",
          data: {},
          code: 400,
          ev: getCurrentLine().line,
        };
      }
    }

    if (sys_error == 0) {
      if (email && email != null && email.length > 0) {
        // continue
      } else {
        sys_error = 1;
        sys_respose = {
          status: 0,
          message: "Unauthorized User",
          data: {},
          code: 400,
          ev: getCurrentLine().line,
        };
      }
    }

    if (sys_error == 0) {
      if (token && token != null && token.length > 0) {
        // continue
      } else {
        sys_error = 1;
        sys_respose = {
          status: 0,
          message: "Unauthorized User",
          data: {},
          code: 400,
          ev: getCurrentLine().line,
        };
      }
    }

    /* Set the User,Token and Uid in Cookie */
    if (sys_error == 0) {
      try {
        Cookies.set(
          "user",
          JSON.stringify({
            email,
            fname,
            lname,
            token,
          }),
          {
            expires: 30,
            sameSite: "strict",
          }
        );

        Cookies.set("lid", token, {
          expires: 30,
          sameSite: "strict",
        });

        sys_respose = {
          status: 1,
          message: "User detail saved",
          data: {},
          code: 200,
        };
      } catch (error) {
        sys_error = 1;
        sys_respose = {
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
    sys_respose = {
      status: 0,
      message: "Something went wrong",
      data: {},
      code: 400,
      ev: getCurrentLine().line,
    };
  }

  return sys_respose;
};

export default saveUserDetail;
