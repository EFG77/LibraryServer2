const mongoose=require('mongoose');

const {Schema}=mongoose;

const bookSchema= new Schema({

title:{type: String, required: true},

author:{type: String, required: true},

description:{type: String, required: true},


});


const bookModel=mongoose.model('books', bookSchema);


module.exports=bookModel;

