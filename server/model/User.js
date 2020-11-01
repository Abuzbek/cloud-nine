const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Users = new Schema({
    name:String,
    number:String,
    list:String
})
module.exports = mongoose.model('person' , Users)