

const express= require('express');
const{createBook,listBooks,updateBook,deleteBook}= require('../Controllers/books_controller')

const router = express.Router();

router.route('/book').get(listBooks).post(createBook).put(updateBook).delete(deleteBook);


module.exports=router;