const mongoose = require('mongoose');
let url="mongodb+srv://kyawzaywin:heartvirus@cluster0-tyllf.mongodb.net/test?retryWrites=true&w=majority";
// let url = "mongodb://localhost:27017/testDatabase"          //place your db name
const connect = mongoose.connect(url, { useNewUrlParser: true });
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
const mongoosePaginate = require('mongoose-paginate');
let Schema = mongoose.Schema;


let UserScheme = new Schema({
    name: { type: String, require: true,minlength:5,maxlength:50},
    email: { type: String, require: true,minlength:5,maxlength:255,unique:true },
    password: { type: String, require: true, minlength:5,maxlength:1024},
    isAdmin:{type:Boolean,default:false}, 
    since: { type: Date, require: true },
})
let User = mongoose.model('user', UserScheme);

module.exports = {
    User
}