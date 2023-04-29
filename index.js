const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectToMongo = require("./db");
const cors = require("cors");
const auth = require("./middleware/auth");

dotenv.config();
connectToMongo().then(() => console.log("connected to DB!"));

//middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/project", auth, require("./routes/project"));

app.listen(9000, () => {
  console.log("server is running on port 9000");
});
