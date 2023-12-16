const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://animesh:kalita@cluster0.cluzy8b.mongodb.net/alemeno")

module.exports = connection;