import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    const client = await MongoClient.connect(
      "mongodb+srv://admin:admin@cluster0.1txxj.mongodb.net/events?retryWrites=true&w=majority"
    );
    const db = client.db();
    await db.collection("newsletter").insertOne({ email: userEmail });

    client.close();

    res.status(201).json({ message: "email registered!" });
  }
}
