
//import express, body-parser
const express = require('express');

const bodyParser =require("body-parser");

const mongoose=require('mongoose');

const bookRoutes=require('./Routes/books_routes')

//import routes
//const routes = require('./Routes/routes');

//create express server instance

const server=express();

//Middlewares

server.use(bodyParser.json());

//endpoints or paths
server.use('/book', bookRoutes)

// connect to database and start server
mongoose.connect('mongodb+srv://ebenezer:S3bNyepUtTssggp1@cluster0.zgkapua.mongodb.net/?retryWrites=true&w=majority').then(result=>{
  server.listen(5000, ()=>console.log('server is ready')); 
}).catch(err=>console.log(err));


 




