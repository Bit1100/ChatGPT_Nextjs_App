import sys_cnf from "@/system/config/config";
import getUserAPI from "@/api/auth/getUser";
import getCurrentLine from "get-current-line";
import Cookies from "js-cookie";
import { answers } from "@/data";

let aptGPT = async function (query, groupId) {
  const sys_config = sys_cnf();

  const remainingCredit =
    Cookies.get("credits") !== undefined &&
    Cookies.get("credits") !== "" &&
    Cookies.get("credits");

  let sys_response = {
    status: 0,
    message: "",
    data: {},
    code: 400,
    ev: getCurrentLine().line,
    remainingCredit,
  };
  let sys_error = 0;

  try {
    var token;
    var credits;

    /* Get the token */
    var GetUser = getUserAPI();
    if (GetUser.status != 1) {
      sys_error = 1;
      sys_response = {
        status: 0,
        message: "Unauthorized User",
        data: {},
        code: 400,
        ev: getCurrentLine().line,
        remainingCredit,
      };
    } else {
      token = GetUser.data.lid;
    }

    if (sys_error == 0) {
      var dataResponse;

      console.log(remainingCredit);
      dataResponse = await new Promise((resolve, reject) => {
        const { description } = answers.find((answer) => answer.id === groupId);

        setTimeout(() => {
          if (!!query) {
            resolve({
              status: 1,
              message: "Query Successful",
              data: description,
              code: 200,
              remainingCredit: +remainingCredit - 1,
            });
          } else {
            sys_error = 1;
            reject({
              status: 0,
              message: "Empty Query is not allowed",
              data: {},
              code: 400,
              remainingCredit,
            });
          }
        }, 1000);
      });
    }

    if (sys_error == 0) {
      sys_response = {
        status: dataResponse.status,
        message: dataResponse.message,
        data: dataResponse.data,
        code: dataResponse.code,
        ev: getCurrentLine().line,
        remainingCredit: dataResponse.remainingCredit,
      };
    }
  } catch (error) {
    sys_error = 1;
    sys_response = {
      status: 0,
      message: "Oops! Something went wrong",
      data: {},
      code: 400,
      ev: getCurrentLine().line,
      remainingCredit,
    };
  }

  return sys_response;
};

export default aptGPT;
