/**
 * Created by WangFeng on 2017/1/21 0021.
 */
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/html5');
const db = mongoose.connection;

db.on('error', ()=> {
    console.log('连接数据库失败');
});

db.once('open', ()=> {
    console.log('打开数据库');
});

var schema = mongoose.Schema({
    name: String,
    age: Number,
    phone: Number,
    email: String,
    intro: String
});
var Student = mongoose.model('info', schema);
module.exports = Student;