import AiAssistant from "@//components/AiAssistant";
import { getCards, getCard } from "@//controllers/Dashboard";
import { wrapper, setCard } from "@//store";
import { withAuth } from "@//utils/withAuth";

const DynamicPage = () => {
  return <AiAssistant />;
};

export default withAuth(DynamicPage);

export const getStaticPaths = async () => {
  const cards = await getCards();

  if (!cards.length) {
    return {
      notFound: true,
    };
  }

  const paths = cards.map((card) => ({
    params: {
      id: card.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ params: { id } }) => {
      const card = await getCard(id);

      if (!Object.keys(card)?.length) {
        return {
          notFound: true,
        };
      }

      store.dispatch(setCard(card));

      return {
        props: {},
      };
    }
);
