import moment from "moment";
import sys_app_cnf from "./app-config";
import url from "url";
import tld from "tldjs";

function getMainDomain(text) {
  const parsedUrl = url.parse(text);
  const hostname = parsedUrl.hostname || text;
  return tld.getDomain(hostname);
}

function sys_config() {
  var req_protocol = "https";
  var req_hostname = "example.com";
  var req_domain = `${req_protocol}://${req_hostname}`;
  var partner_id = getMainDomain(req_hostname);

  var sys_config_data = {
    api_req_domain: `https://api.example.com`,
    req_protocol: req_protocol,
    req_hostname: req_hostname,
    req_domain: req_domain,
    secure_req_domain: `https://${req_hostname}`,
    unsecure_req_domain: `http://${req_hostname}`,
    current_date_time: moment().format("YYYY-MM-DD H:m:s"),
    current_date: moment().format("YYYY-MM-DD"),
    current_time: moment().format("H:m:s"),
    site_config: sys_app_cnf.site_config["default"],
    partner_id: partner_id,
    error_message: "Oops! Something went wrong",
    toast_msgid: "toast_message",
  };

  return sys_config_data;
}

export default sys_config;
