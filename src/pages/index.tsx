import Head from "next/head";
import Dashboard from "@/components/Dashboard";
import { getCards, getCategoryCards } from "@/controllers/Dashboard";
import { wrapper, setCards } from "@/store";
import { withAuth } from "@/utils/withAuth";

const DashboardPage = () => {
  return (
    <>
      <Head>
        <title>Creator.AI WebApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </>
  );
};

export default withAuth(DashboardPage);

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ query }) => {
      const category = query?.category || null;

      const cards = category
        ? await getCategoryCards(category)
        : await getCards();

      if (!cards?.length) {
        return {
          notFound: true,
        };
      }

      store.dispatch(setCards(cards));

      return {
        props: {},
      };
    }
);
