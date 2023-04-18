import { data } from "@/data";

export const getCard = (id) => {
  const card = data.find((card) => card.id === id);

  if (Object.keys(card).length) {
    return Promise.resolve(card);
  } else {
    return Promise.resolve({});
  }
};
