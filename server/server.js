require('dotenv').config()
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");


const app = express();

app.use(cors());
app.use(express.json())

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");

const mongoConnect = async ()=> {
    await mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));
}
mongoConnect()

app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/post", postRoute);
app.use("/category", categoryRoute);

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
    })
}

app.listen(process.env.PORT || "5000", () => {
    console.log("Backend is running.");
});
