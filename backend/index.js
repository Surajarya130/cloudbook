const connectToMongo = require("./db");
const express = require("express");
connectToMongo();
const app = express();
const port = 5000;

// Middleware to get req.body
app.use(express.json());

// Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("Hello Suraj");
});

app.listen(port, () => {
  console.log("Running on port:  " + port);
});
