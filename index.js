const express = require("express");
const app = express();

app.use(express.json());
app.get("/version", (req, res) => {
    res.send("1");
})

app.get("/health", (req, res) => {
    if (true) throw new Error("Error...");
    res.send("OK");
})
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})