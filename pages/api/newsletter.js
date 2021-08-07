export default function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    console.log(`newsletter subscribed to ${email}`);
  }
  res.status(200).json({ message: "this works!" });
}
