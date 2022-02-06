const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const blocksRouter = require("./routes/blocks/blocks");
require("dotenv").config();

const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(helmet());
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/blocks", blocksRouter);
// app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ status: "error", code: 404, message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ status: "Fail", code: 500, message: err.message });
});

module.exports = app;
