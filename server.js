const express = require("express")
const errorHandle = require("./middleware/errorHandle");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
connectDb();
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json())
app.use("/api/contacts", require("./routes/contactRoute"))
app.use(errorHandle);
app.listen(port, () => {
    console.log(`server running on ${port}  port`)
})