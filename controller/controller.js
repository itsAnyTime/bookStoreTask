const lowDb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const { nanoid } = require('nanoid')
const adapter = new FileSync('./data/db.json')
const db = lowDb(adapter)
db.defaults({books: [], users: [], orders: []}).write();
const bookData = db.get('books').value();


const books = (res) => {
    res.render('books',{data:bookData})
}

const addBook = (req, res) => {
    const book = {
        author:req.body.author,
        title:req.body.title,
        year:req.body.year,
        price: req.body.price
    };
    const date = new Date()
    db.get('books').push({ ...book, date:date.toLocaleDateString(), id: nanoid()}).write();
    res.redirect('/books')
}

const getUpdateBook =  (req, res) => {
    const book = db.get('books').find({id: req.params.id}).value()
    res.render('updateBook',{ data: book })
}

const updateBook = (req, res) => {
    const book = db.get('books').find({id: req.params.id}).value()
    db.get('books')
    .find({id: req.params.id})
    .assign({
        author: req.body.author || book.author,
        title: req.body.title || book.title,
        year: req.body.year || book.year,
        price: req.body.price || book.price,
        id: req.params.id
    }).write()
    res.redirect('/books')
}


const deleteBook = (req, res) => {
    db.get('books')
    .remove({id: req.params.id})
    .write()
    res.send({status:1})
}

const book = (req, res) => {
res.render('book',{data: db.get('books').find({id: req.params.id}).value()})
}


//_____________________USERS_____________________________//

const userData = db.get('users').value();

const   users = (res) => {
    res.render('users',{data:userData})
}

const addUser = (req, res) => {
    const users = {
        fName:req.body.fName,
        lName:req.body.lName,
        email: req.body.email,
        password: req.body.password 
    };

    const date = new Date()
    db.get('users').push({ ...users, date:date.toLocaleDateString(), id: nanoid()}).write();
    res.redirect('/users')
}

const getUpdateUser =  (req, res) => {
    const user = db.get('users').find({id: req.params.id}).value()
    res.render('updateUser',{ data: user })
}


const updateUser = (req, res) => {
    const user = db.get('users').find({id: req.params.id}).value()
    db.get('users')
    .find({id: req.params.id})
    .assign({
        fName: req.body.fName || user.fName,
        lName: req.body.lName || user.lName,
        email: req.body.email || user.email,
        password: req.body.password || user.password,
        id: req.params.id
    }).write()
    res.redirect('/users')
}

const deleteUser = (req, res) => {
    db.get('users')
    .remove({id: req.params.id})
    .write()
    res.send({status:1})
}

const user = (req, res) => {
    res.render('user',{data: db.get('users').find({id: req.params.id}).value()})
}



//_______________________ORDERS_____________________________________//

const orderData = db.get('orders').value();


const   orders = (res) => {
    res.render('orders',{data: orderData})
}

const addOrder = (req, res) => {
    console.log(req.body.qty);
    const orders = {
        bookId: req.body.bookId,
        qty: req.body.qty
    };

    const date = new Date()
    db.get('orders').push({ ...orders, date:date.toLocaleDateString(), id: nanoid()}).write();
    res.redirect('/orders')
}

const getUpdateOrder =  (req, res) => {
    const order = db.get('orders').find({id: req.params.id}).value()
    res.render('updateOrder',{ data: order })
}


const updateOrder = (req, res) => {
    const order = db.get('orders').find({id: req.params.id}).value()
    db.get('orders')
    .find({id: req.params.id})
    .assign({
        bookId: req.body.bookId || order.bookId,
        qty: req.body.qty || order.qty,
        id: req.params.id
    }).write()
    res.redirect('/orders')
}

const deleteOrder = (req, res) => {
    db.get('orders')
    .remove({id: req.params.id})
    .write()
    res.send({status:1})
}

const order = (req, res) => {
    res.render('order',{data: db.get('orders').find({id: req.params.id}).value()})
}


module.exports = {books, addBook, getUpdateBook, updateBook, deleteBook, book,
                    users, addUser, getUpdateUser, updateUser, deleteUser, user, 
                    orders, addOrder, getUpdateOrder, updateOrder, deleteOrder, order
                }

