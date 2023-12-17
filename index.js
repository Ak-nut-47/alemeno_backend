const express = require("express");
const courseRouter = require("./Routes/courseListing.route");
const connection = require("./config/db");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/", courseRouter);

app.listen(process.env.PORT, async (error) => {
    if (error) {
        console.error("Error starting the server:", error);
        return;
    }

    try {
        await connection;
        console.log(`Server is connected to the Database and is running at port ${process.env.PORT}`);
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);

});

process.on("uncaughtException", (error) => {
    console.error("Uncaught Exception:", error);

    process.exit(1);
});
