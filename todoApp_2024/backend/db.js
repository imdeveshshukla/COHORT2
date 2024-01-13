//Create mongoose schema

const mongoose = require("mongoose");
//mongodb://localhost:27017
// mongodb+srv://deveshshukla1603:deveshshukla@cluster0.b2mpqv0.mongodb.net/
mongoose.connect("mongodb+srv://deveshshukla1603:deveshshukla@cluster0.b2mpqv0.mongodb.net/?retryWrites=true&w=majority");

// const todoSchema = new mongoose.Schema({
//     titile:String,
//     description:String,
//     completed:Boolean
// });

const todoSchema = new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
});

const todos = mongoose.model('todos',todoSchema);

module.exports = todos;