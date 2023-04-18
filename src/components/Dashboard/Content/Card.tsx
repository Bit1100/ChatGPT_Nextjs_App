import { ICardItem } from "./Content.types";
import {
  Card,
  Top,
  Bottom,
  Icon,
  Title,
  Description,
  Category,
  Span,
} from "./Content.styles";

/* Icons */
import { BsFillTagsFill } from "react-icons/bs";

import { iconMap } from "@/components/Utils/Icon";
import IconComponent from "@/components/Utils/Icon";

const CardItem = (props: ICardItem) => {
  const { card } = props;
  const { title, category, icon, iconBgClr, description } = card;

  const iconData = {
    iconComponent: iconMap[icon],
  };

  return (
    <Card>
      <Top>
        <Icon bgClr={iconBgClr}>
          <IconComponent iconData={iconData} />
        </Icon>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Top>
      <Bottom>
        <Category>
          <BsFillTagsFill />
          <Span>{category}</Span>
        </Category>
      </Bottom>
    </Card>
  );
};

export default CardItem;
