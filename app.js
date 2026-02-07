const path = require("path");
const express = require("express");
require("dotenv").config();

const setupHbs = require("./config/hbs");
const webRoutes = require("./routes/web.routes");

const PORT = process.env.PORT || 3001;
const app = express();

app.set("view engine", "hbs");
setupHbs();

app.use(express.static(path.join(__dirname, "./public")));

app.use("/", webRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
