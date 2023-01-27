const express = require("express");

const bodyparser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();
var corsOptions = {
  origin: "*", // Reemplazar con dominio
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// import routes

// route middlewares

app.use("/api/users", require("./routes/propi"));

app.get("/we", (req, res) => {
  res.json({
    estado: true,
    mensaje: "si funciona",
  });
});
const history = require("connect-history-api-fallback");
app.use(history());
app.use(express.static(__dirname + "/public"));

// iniciar server
const PORT = process.env.PORT || 310;
app.listen(PORT, () => {
  console.log(`servidor andando en: ${PORT}`);
});
