const mongoose = require("mongoose");
require("dotenv").config();


const connectToDatabase = async () => {
    try {
        const connection = await mongoose.connect(process.env.mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        });

        console.log("Connected to MongoDB");
        return connection;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
};

module.exports = connectToDatabase;
