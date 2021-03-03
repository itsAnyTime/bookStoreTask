const express = require('express');
const booksRouter = express.Router();
const controller = require('../controller/controller')


booksRouter
    .route('/books')
    .get((req,res) => {
        controller.books(res)
        
    })


booksRouter
    .route('/books/addBook')
    .get((req, res) => {
        res.sendFile(__dirname.slice(0,53) + '/public' + '/addBook.html')
        
    })
    .post((req, res, next) => {
        controller.addBook(req, res)
        next()
    })
    
    booksRouter
    .route('/books/updateBook/:id')
    .get((req, res, next) => {
        controller.getUpdateBook(req, res)
        next()
    })
    .post((req,res, next) => {
        controller.updateBook(req, res)
        next()
    })


booksRouter
    .route('/books/:id')
    .get((req, res, next) => {
        controller.book(req, res)
        next()
    })
    .put((req,res, next) => {
        controller.updateBook(req, res)
        next()
    })
    .delete((req, res, next) => {
        controller.deleteBook(req, res)
        next()
    })
    // booksRouter.delete("/book/:id",(req,res)=>{
    //     // res.send("asdfgh")
    //     res.json({status: 1})
    // })

module.exports = booksRouter