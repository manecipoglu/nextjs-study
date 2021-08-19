import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(
    "mongodb+srv://admin:admin@cluster0.1txxj.mongodb.net/events?retryWrites=true&w=majority"
  );
  const db = client.db();

  if (req.method === "POST") {
    const newComment = {
      eventId,
      email: req.body.email,
      name: req.body.name,
      comment: req.body.text,
    };

    const result = await db.collection("comments").insertOne(newComment);
  }

  if (req.method === "GET") {
    const documents = db
      .collection("comments")
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({ comments: documents });
  }
  client.close();
}
