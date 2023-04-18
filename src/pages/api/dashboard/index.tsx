import { data as cards } from "@/data";

export default function articlesHandler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(cards);

    res.end();
  }
}
