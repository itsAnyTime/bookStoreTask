const express = require('express');
const ordersRouter = express.Router();
const controller = require('../controller/controller')


ordersRouter
    .route('/orders')
    .get((req,res) => {
        controller.orders(res)
        
    })
    

ordersRouter
    .route('/orders/addOrder')
    .get((req, res) => {
        res.sendFile(__dirname.slice(0,53) + '/public' + '/addOrder.html')
        
    })
    .post((req, res, next) => {
        controller.addOrder(req, res)
        next()
    })
    
ordersRouter
    .route('/orders/updateOrder/:id')
    .get((req, res, next) => {
        controller.getUpdateOrder(req, res)
        next()
    })
    .post((req,res, next) => {
        controller.updateOrder(req, res)
        next()
    })


ordersRouter
    .route(`/orders/:id`)
    .get((req, res, next) => {
        controller.order(req, res)
        next()
    })
    .put((req,res, next) => {
        controller.updateOrder(req, res)
        next()
    })
    .delete((req, res, next) => {
    controller.deleteOrder(req, res)
    next()
    })

module.exports = ordersRouter