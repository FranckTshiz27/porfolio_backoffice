const technologieRoute = require("./routes/technologie");
const projetRoute = require("./routes/projet");
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

server = express();
server.use(cors());
server.use(bodyparser());

server.use(technologieRoute);
server.use(projetRoute);

console.log(process.env.PORT);

const PORT = process.env.PORT || 8000;
server.listen(PORT);
