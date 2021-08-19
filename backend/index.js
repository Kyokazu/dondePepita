const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
const ProductRoutes = require("./routes/Product.route");
const StoreRoutes = require("./routes/Store.route");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/product", ProductRoutes);
app.use("/api/store", StoreRoutes);

app.listen(process.env.PORT, () => console.log("BackEnd server running on port: ", process.env.PORT));

dbConnection();