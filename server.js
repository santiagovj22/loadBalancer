const express = require("express");
const app = express();

// environments variables
const PORT = process.env.PORT || 4000;
const server = process.env.server||"GateWay"

//simple response
app.get("/", (req, res, next) => {
    res.send(`This Request redirect to the server ${server}`);
});

// Server
app.listen(PORT, () => {
    console.log(`Server Running at port:${PORT}`)
});
