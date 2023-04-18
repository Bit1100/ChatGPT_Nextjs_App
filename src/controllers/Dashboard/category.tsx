import { data } from "@/data";

export const getCategories = () => {
  const categories = [
    "all",
    ...Array.from(new Set(data.map((card) => card.category))),
  ];

  if (categories.length) {
    return categories;
  } else {
    return [];
  }
};

export const getCategoryCards = (category) => {
  const cards = data.filter(
    (card) => card.category === category?.toLowerCase()
  );

  if (cards.length) {
    return Promise.resolve(cards);
  } else {
    return Promise.resolve([]);
  }
};
