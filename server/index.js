const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
app.use(helmet());

app.listen(8000, () => {
  console.log("listening on Port 8000");
});
