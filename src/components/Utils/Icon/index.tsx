/* Icons */
import { BsFillTagsFill } from "react-icons/bs";
import {
  BsBorderAll,
  BsFillCartCheckFill,
  BsFillCameraVideoFill,
  BsFillPencilFill,
} from "react-icons/bs";
import { FcAdvertising } from "react-icons/fc";
import { IconType } from "react-icons";
import { FaBlog, FaUserCheck } from "react-icons/fa";

export const iconMap = {
  BsFillTagsFill: BsFillTagsFill,
  BsBorderAll: BsBorderAll,
  BsFillCartCheckFill: BsFillCartCheckFill,
  BsFillCameraVideoFill: BsFillCameraVideoFill,
  BsFillPencilFill: BsFillPencilFill,
  FcAdvertising: FcAdvertising,
  FaBlog: FaBlog,
  FaUserCheck: FaUserCheck,
};

interface IIconData {
  iconData: {
    iconComponent: IconType;
  };
}

const IconComponent = ({ iconData }: IIconData) => {
  const { iconComponent: Icon } = iconData;
  return <Icon />;
};

export default IconComponent;
