const express = require("express")
const courseRouter = require("./Routes/courseListing.route")
const connection = require("./Config/db")
const cors = require("cors")
const app = express()
require("dotenv").config()
app.use(express.json())
app.use(cors())

app.use("/", courseRouter)

app.listen(process.env.PORT, async (error) => {
    if (error) {
        console.log(error)
    }
    try {
        await connection;
        console.log(`Server is connected to the Database and is running at port ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }
})

