const express = require("express");
const app = express();
var path = require("path");

const port = process.env.PORT || 3000;

app.use("/js", express.static(path.join(__dirname, "js")));
app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/img", express.static(path.join(__dirname, "img")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(port);

console.log("Listening on port " + port);
