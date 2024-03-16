const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("App listening on port " + port);
});

app.get("/add", (req, res) => {
  res.send(`
    <html>
    <head><title>Add Numbers</title></head>
    <body>
      <h1>Add Numbers</h1>
      <form action="/add" method="post">
        <label for="num1">Number 1:</label>
        <input type="text" id="num1" name="num1"><br><br>
        <label for="num2">Number 2:</label>
        <input type="text" id="num2" name="num2"><br><br>
        <input type="submit" value="Add">
      </form>
    </body>
    </html>
  `);
});

app.post("/add", (req, res) => {
  const { num1, num2 } = req.body;
  if (!num1 || !num2) {
    return res.status(400).send("Please enter both numbers");
  }
  const result = Number(num1) + Number(num2);
  res.send(`Result: ${result}`);
});
