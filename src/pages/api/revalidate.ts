import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    const path = req.body.path;
    if (path) {
      await res.revalidate(path);
      return res.json({ revalidated: true });
    }
    return res.status(400).json({ message: "Missing path" });
  } catch {
    return res.status(500).json({ message: "Error revalidating" });
  }
}