const express= require('express');
const{listBooksController,createBookController,updateBookController,deleteBookController}= require('../Controllers/controllers')

const router = express.Router();

router.route('/book').get(listBooksController).post(createBookController).put(updateBookController).delete(deleteBookController);


module.exports=router;