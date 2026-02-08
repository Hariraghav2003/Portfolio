const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const contactMeRoutes = require("./routes/Contactroutes");
const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 3000;
app.use("/portfolio", contactMeRoutes);
app.listen(port, () => {
  console.log(`Backend Server running in ${port}`);
});
