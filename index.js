const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const port = process.env.PORT | 3000;

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//DB Connection
require("./src/config/dev_db");

//Routers
const calcyRouter = require("./src/routes/calciRoute");

app.use("/api/calci", calcyRouter);

app.get("/", (req, res) => {
	res.send("Hello world");
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
