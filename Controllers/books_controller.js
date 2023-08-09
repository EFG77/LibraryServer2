

const bookModel=require('../Models/book_model');

//desc   create new book
//route  POST /Book/
//access private

exports.createBook =async (req, res, next)=>{

    const{title,author,description}=req.body;

    try {
        const book = new bookModel({title,author,description});
        await book.save();
    
        res.send({success:true, data:book});  
    } catch (error) {
        res.send({success:false, data:null});  
    }
         
};



//desc   view books
//route  GET /Book/
//access public
exports.listBooks =async (req, res, next)=>{

    res.send({success:true, data:books});
};


//desc   update book
//route  PUT /Book/
//access private
exports.updateBook = async(req, res, next)=>{

    res.send({success:true, data:updatedBook});
};


//desc   delete book
//route  DELETE /Book/
//access private
exports.deleteBook =async(req, res, next)=>{
    res.send({success:true, data:deletedBook});
};

