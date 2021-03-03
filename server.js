const express = require('express');
const app = express();
const hostname = 'localhost' ;
const PORT = process.env.PORT || 3000;
const users = require('./routes/users');
const books = require('./routes/books');
const orders = require('./routes/orders')
const path = require('path');
const setCors = require('./middleware/security');
const methodOverride = require('method-override')
const test = require('./routes/test')

app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname,'public')));

app.set('views', './public')
app.set('view engine', 'ejs') 

app.use(express.urlencoded({extended : true}))

app.use((req,res,next)=>{
    setCors(req,res)  
    next() 
})


app.get('/', (req, res) => {
    res.sendFile(__dirname +'/public/index.html')
})
app.use('/test', test)

app.use('/', users)
app.use('/', books)
app.use('/', orders)



app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status(404);
    next(error)
})


app.use((error,req, res, next) => {
    res.status(error.status || 500)
    
    res.json({
        error: {
            message: error.message
        }
    })
})


app.listen(PORT, () => console.log(`Listening at http//:${hostname}:${PORT}`)) 