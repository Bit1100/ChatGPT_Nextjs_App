import { Content } from "./Content.styles";
import Card from "./Card";
import { useAppSelector } from "@/store";
import Link from "next/link";

const DashboardContent = () => {
  const cards = useAppSelector((state) => state.dcards.cards);

  return (
    <Content>
      {cards?.map((card) => (
        <Link key={card.id} href={`/ai-assistant/${card.id}`} passHref>
          <Card card={card} />
        </Link>
      ))}
    </Content>
  );
};

export default DashboardContent;
