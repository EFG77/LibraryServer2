
const mongoose= require("mongoose");

//BookModel
class BookModel{
    constructor({title,author,description}){
        this.title=title;
        this.author=author;
        this.description=description;
    }


    save(){
      booksDb.push(this);
      return this;
    }

    static all(){
      return booksDb;
    }

  
    
static update(updateInfo={}){
      let current_book=null;
    booksDb=booksDb.map(book=>{
      if(book.title === updateInfo.title){
         let new_book_info={...book, ...updateInfo};
         current_book=new_book_info;
         return new_book_info;  
      }

      return book;
    
    })
    return current_book

    }




    static delete({title}){
      let deletedBook=null;
      booksDb= booksDb.filter(book=>{
          if (book.title!==title){
              return true;
          }
          deletedBook=book;

          return false;
      })
      return deletedBook;
    }


}

module.exports = BookModel;

