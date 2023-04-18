import {
  OptionsWrapper,
  Heading,
  Options,
  Selected,
  Icon,
  Title,
  ListBox,
  List,
  Heading2,
} from "./Options.styles";
import { useState, useMemo, useEffect } from "react";
import { useAppDispatch, useAppSelector, setCard } from "@/store";
import { getCards } from "@/controllers/Dashboard/";
import { useRouter } from "next/router";
import { handleToast } from "@/helpers";
import { iconMap } from "@/components/Utils/Icon";

/* Icons */
import { BiCaretDown } from "react-icons/bi";
import {
  BsBorderAll,
  BsFillCartCheckFill,
  BsFillCameraVideoFill,
  BsFillPencilFill,
} from "react-icons/bs";
import { FcAdvertising } from "react-icons/fc";
import { FaBlog, FaUserCheck } from "react-icons/fa";
import IconComponent from "@/components/Utils/Icon";

const OptionsComponent = () => {
  const router = useRouter();
  const {
    id,
    title: cardTitle,
    icon,
  } = useAppSelector((state) => state.dcards.card);
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const options = useMemo(
    () => [
      {
        id: "1",
        name: "Blog",
        content: [
          {
            icon: <FaBlog />,
            title: "Blog Intro",
          },
          {
            icon: <FaBlog />,
            title: "Text Summarizer",
          },
          {
            icon: <FaBlog />,
            title: "Blog Body",
          },
        ],
      },
      {
        id: "2",
        name: "Digital Ad",
        content: [
          {
            icon: <FcAdvertising />,
            title: "Facebook Ad Title",
          },
          {
            icon: <FcAdvertising />,
            title: "Facebook Ad Text",
          },
          {
            icon: <FcAdvertising />,
            title: "Google Ad Text",
          },
        ],
      },
      {
        id: "3",
        name: "Ecommerce",
        content: [
          {
            icon: <BsFillCartCheckFill />,
            title: "Amazon Product Description",
          },
          {
            icon: <BsFillCartCheckFill />,
            title: "Shopify Product Description",
          },
          {
            icon: <BsFillCartCheckFill />,
            title: "Product Description",
          },
        ],
      },
      {
        id: "4",
        name: "Social Media",
        content: [
          {
            icon: <FaUserCheck />,
            title: "Photo Post Caption",
          },
          {
            icon: <FaUserCheck />,
            title: "Pinterest Pin Title",
          },
          {
            icon: <FaUserCheck />,
            title: "Pinterest Description",
          },
        ],
      },
      {
        id: "5",
        name: "Video",
        content: [
          {
            icon: <BsFillCameraVideoFill />,
            title: "Youtube Video Title",
          },
          {
            icon: <BsFillCameraVideoFill />,
            title: "Youtube Video Description",
          },
          {
            icon: <BsFillCameraVideoFill />,
            title: "Youtube Video Topic Idea",
          },
        ],
      },
      {
        id: "6",
        name: "Writer",
        content: [
          {
            icon: <BsFillPencilFill />,
            title: "Headline",
          },
          {
            icon: <BsFillPencilFill />,
            title: "Text Summary",
          },
          {
            icon: <BsFillPencilFill />,
            title: "Content Improve",
          },
        ],
      },
    ],
    []
  );

  const iconData = {
    iconComponent: iconMap[icon],
  };

  const dispatchCard = async (title) => {
    try {
      const cards = await getCards();

      const card = cards.find((card) => card.title === title);

      dispatch(setCard(card));
    } catch (err) {
      handleToast("OOPs! Something Went Wrong", "error");
    }
  };

  useEffect(() => {
    if (!!cardTitle) {
      router.push(`/ai-assistant/${id}`, undefined, { shallow: true });
    }
  }, [cardTitle]);

  const handleSelect = (title) => {
    setIsOpen(false);
    dispatchCard(title);
  };

  return (
    <OptionsWrapper>
      <Heading>AI Assistant</Heading>
      <Options>
        <Selected onClick={() => setIsOpen((prevState) => !prevState)}>
          <Icon>
            <IconComponent iconData={iconData} />
          </Icon>
          <Title>{cardTitle}</Title>
          <Icon isOpen={isOpen} style={{ marginLeft: "auto" }}>
            <BiCaretDown />
          </Icon>
        </Selected>
        <ListBox isOpen={isOpen}>
          {options.map(({ name, id, content }) => (
            <>
              <Heading2>{name}</Heading2>
              {content.map(({ icon, title }) => (
                <List
                  active={cardTitle === title}
                  onClick={() => handleSelect(title)}
                  key={id}
                >
                  <Icon>{icon}</Icon>
                  <Title active={cardTitle === title}>{title}</Title>
                </List>
              ))}
            </>
          ))}
        </ListBox>
      </Options>
    </OptionsWrapper>
  );
};

export default OptionsComponent;
