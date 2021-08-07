import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const eventId = req.query.eventId;

  const filePath = path.join(process.cwd(), "data", "comments.json");
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);

  if (req.method === "POST") {
    const newComment = {
      id: new Date().toISOString(),
      email: req.body.email,
      name: req.body.name,
      comment: req.body.text,
    };
    data.push(newComment);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "success!" });
  } else {
    res.status(200).json(data);
  }
}
