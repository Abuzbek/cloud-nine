const mongoose = require('mongoose')
const Schema = mongoose.Schema
const product = new Schema({
    img:String,
    title:String,
    link:String,
    item:String,
})
module.exports = mongoose.model('portfolio' , product)