const express = require("express");

const ContactRouter = require("./routes/contact");
var cors = require("cors");
const app = express();

const port = process.env.port;

const connectDB = require("./config/connectdb");

require("dotenv").config();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/user", ContactRouter);

app.listen(process.env.port, (err) => {
  err ? console.log(err) : console.log(`you did it ${process.env.port}`);
});
