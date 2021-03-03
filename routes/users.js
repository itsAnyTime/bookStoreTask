const express = require('express');
const usersRouter = express.Router();
const controller = require('../controller/controller')


usersRouter
    .route('/users')
    .get((req,res) => {
        controller.users(res)
    })
    .delete((req, res) => {
        controller.deleteUser(req, res)
        
        })

usersRouter
    .route('/users/addUser')
    .get((req, res) => res.sendFile(__dirname.slice(0,53) + '/public' + '/addUser.html'))
    .post((req, res, next) => {
        controller.addUser(req, res)
        next()
    })
    
usersRouter
    .route('/users/updateUser/:id')
    .get((req, res, next) => {
        controller.getUpdateUser(req, res)
        next()
    })
    .post((req,res, next) => {
        controller.updateUser(req, res)
        next()
    })
usersRouter
    .route('/users/:id')
    .get((req, res, next) => {
        controller.user(req, res)
        next()
    })
    .post((req,res, next) => {
        controller.updateUser(req, res)
        next()
    })
    .delete((req, res, next) => {
        controller.deleteUser(req, res)
        next()
    })


module.exports = usersRouter    