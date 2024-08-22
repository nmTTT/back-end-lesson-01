const express = require("express");
const fs = require("fs");

const port = 8000;
const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  const users = fs.readFileSync("./users.json", "utf-8");
  const data = JSON.parse(users);
  console.log("users", data);
  res.status(200).json({ message: data.users });
});

app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});
