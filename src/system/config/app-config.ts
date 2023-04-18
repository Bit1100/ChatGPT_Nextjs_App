import chatLogo from "@/assets/images/logo/chatLogo.png";
import logo from "@/assets/images/logo/logo.svg";
import shortLogo from "@/assets/images/logo/shortLogo.svg";

var sys_app_config = {
  dashboard_url: "/",
  image_file_max_size_mb: 10,
  site_config: {
    default: {
      name: "MM 360",
      logo: logo,
      chatLogo: chatLogo,
      shortLogo: shortLogo,
    },
  },
};

const sys_app_cnf = sys_app_config;
export default sys_app_cnf;
