import sys_cnf from "@/system/config/config";
import getCurrentLine from "get-current-line";
import axios from "axios";
import saveUserDetail from "./saveUserDetail";

let login = async function (email, password) {
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
      var dataResponse = await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (email === "surajkeshari@fake.com" && password === "hello123") {
            resolve({
              status: 1,
              message: "Login Successful",
              data: {
                fname: "Suraj",
                lname: "Keshari",
                email,
                token:
                  "sdklf3k3krkk3kjkf99dfsji9sdfljk9kdlsfj0909sklfu9933kjklklj3kjkjl38909ujijl39",
              },
              code: 200,
            });
          } else {
            sys_error = 1;
            reject({
              status: 0,
              message: "Invalid Credentials",
              data: {},
              code: 400,
            });
          }
        }, 1000);
      });
    }

    /* Check for DataResponse and save Userdata */
    if (sys_error == 0) {
      if (dataResponse.status == 1) {
        var SaveUserDetail = await saveUserDetail(
          sys_config,
          dataResponse.data
        );
        if (SaveUserDetail.status == 1) {
          sys_response = {
            status: 1,
            message: "Login success",
            data: dataResponse.data,
            code: 200,
          };
        } else {
          sys_error = 1;
          sys_response = {
            status: 0,
            message: SaveUserDetail.message,
            data: {},
            code: 400,
            ev: getCurrentLine().line,
          };
        }
      } else {
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
  } catch ({ status, message, data, code }) {
    sys_error = 1;
    sys_response = {
      status: status,
      message: message,
      data: data,
      code: code,
      ev: getCurrentLine().line,
    };
  }

  return sys_response;
};

export default login;
