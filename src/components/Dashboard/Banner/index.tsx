import { useState, useMemo } from "react";
import { useAppDispatch, setCards } from "@/store";
import axios from "axios";
import { server } from "@/config";
import { useRouter } from "next/router";

/* Styled Components */
import {
  Banner,
  Title,
  Menu,
  MenuItem,
  Icon,
  Category,
  Triangle,
} from "./Banner.styles";

/* Icons */
import {
  BsBorderAll,
  BsFillCartCheckFill,
  BsFillCameraVideoFill,
  BsFillPencilFill,
} from "react-icons/bs";
import { FaBlog, FaUserCheck } from "react-icons/fa";
import { FcAdvertising } from "react-icons/fc";

const DashboardBanner = () => {
  const router = useRouter();
  const { category } = router.query;
  const [activeCategory, setActiveCategory] = useState(category || "all");
  const dispatch = useAppDispatch();

  const menuITems = useMemo(
    () => [
      {
        icon: <BsBorderAll size={18} />,
        category: "All",
      },
      {
        icon: <FaBlog size={18} />,
        category: "Blog",
      },
      {
        icon: <FcAdvertising size={18} />,
        category: "Digital Ad",
      },
      {
        icon: <BsFillCartCheckFill size={18} />,
        category: "Ecommerce",
      },
      {
        icon: <FaUserCheck size={18} />,
        category: "Social Media",
      },
      {
        icon: <BsFillCameraVideoFill size={18} />,
        category: "Video",
      },
      {
        icon: <BsFillPencilFill size={18} />,
        category: "Writer",
      },
    ],
    []
  );

  // Handle Filter for All category
  const handleAllFilter = async () => {
    const data = await axios.get(`${server}/api/dashboard`);

    const dcards = data.data;

    dispatch(setCards(dcards));

    setActiveCategory("all");

    router.push(`/`, undefined, { shallow: true });
  };

  // Handle Filter for catogories
  const handleFilter = async (category) => {
    console.log(category);

    if (category === "all") {
      handleAllFilter();
      return;
    }

    const data = await axios(`${server}/api/dashboard/category/${category}`);

    const dcards = data.data;

    dispatch(setCards(dcards));

    setActiveCategory(category);

    router.push(
      "/",
      {
        pathname: "/",
        query: {
          category,
        },
      },
      { shallow: true }
    );
  };

  return (
    <Banner>
      <Title>What would you like to do?</Title>
      <Menu>
        {menuITems.map((item) => {
          return (
            <MenuItem
              onClick={() => handleFilter(item.category.toLowerCase())}
              key={item.category}
            >
              <Icon>{item.icon}</Icon>
              <Category>{item.category}</Category>
              <Triangle
                active={activeCategory === item.category.toLowerCase()}
              />
            </MenuItem>
          );
        })}
      </Menu>
    </Banner>
  );
};

export default DashboardBanner;
