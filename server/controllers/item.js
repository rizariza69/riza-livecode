const Item = require('../models/item')


module.exports = {
    create: (req,res) => {
        Item
            .create({
                name: req.body.name,
                price: req.body.price,
                stock: req.body.stock,
                tag: req.body.tag    
            })

            .then(item => {
                res.status(201).json({
                    msg:'create success',
                    item
                })

            })

            .catch(error => {
                res.status(400).json({
                    error : "You are not authorized to access this API"
                })
            })
    },
    findAll: (req,res) =>{
        Item
            .find()
            .then(item => {
                res.status(200).json({
                    msg:'create success',
                    data: item
                })
            })
    },
    readOne: (req,res) => {
        Item
            .findOne({
                $or: [{name: new RegExp(req.query.q, 'i')},
                    {price: new RegExp(req.query.q, 'i')},
                {tag: new RegExp(req.query.q, 'i')}
                ]
            })
            .then(item => {
                res.status(200).json({
                    msg:'success find id',
                    data: item
                })
            })

            .catch(err => {
                res.status(500).json({
                    msg: 'error'
                })
            })

    },

    
}



