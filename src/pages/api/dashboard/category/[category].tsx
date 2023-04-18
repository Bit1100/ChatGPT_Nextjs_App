import { data } from "@/data";

export default function categoryArticlesHandler(req, res) {
  if (req.method === "GET") {
    const { category } = req.query;

    const cards = data.filter(
      (card) => card.category === category.toLowerCase()
    );

    if (cards.length) {
      res.status(200).json(cards);

      res.end();
    } else {
      res
        .status(404)
        .json({ message: `Page with ${category} category Not Found` });

      res.end();
    }
  }
}
