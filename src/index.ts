import express from "express";

const app = express();

app.route("/").get((req, res) => {
  res.send("Hello Duniaa !");
});

app.listen(3000);
