import getCurrentLine from "get-current-line";

var getUserSetting = function () {
  var sys_error = 0;
  var sys_response = {
    status: 0,
    message: "",
    data: {},
    code: 400,
    ev: getCurrentLine().line,
  };
  try {
    var serverSetting;

    if (sys_error == 0) {
      try {
        serverSetting = localStorage.getItem("serverSetting");
        var serverSettingData = {};
        if (
          serverSetting != null &&
          serverSetting.length > 0 &&
          serverSetting != "null" &&
          serverSetting != "undefined"
        ) {
          serverSettingData = JSON.parse(serverSetting);
        }

        if (serverSettingData != null && serverSettingData.length > 0) {
          sys_response = {
            status: 1,
            message: "User settings",
            data: serverSettingData,
            code: 200,
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

  return sys_response;
};

export default getUserSetting;
