const User = require('../models/users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const axios = require("axios")


module.exports = {
    register: (req,res) => {
        let {name, email, password} = req.body
        console.log(req.body);

        let salt = bcrypt.genSaltSync(8)
        let hash = bcrypt.hashSync(password, salt)


        User.create({ 
            name: name,
            email: email,
            password: hash
        })
        .then(newUser => {

            res.status(201).json({
                msg: 'register success',
                data: newUser
            })
        })
    },
    login: (req, res) => {

        var {
            email,
            password
        } = req.body
        User
            .findOne({
                email: email
            })
            .then(user => {
                let {
                    email,
                    password
                } = req.body
                User
                    .findOne({
                        email: email
                    })

                    .then(user => {
                        if (user) {
                            let checkPass = bcrypt.compareSync(password, user.password)
                            if (checkPass) {

                                let token = jwt.sign({
                                    id: user._id,
                                    email: user.email
                                }, "EAAXH1kD759wBAMowW5WxpNRjoe6q1u4fSu16nLVTZAJgX0gpSqSiZBdpoZCYnikoVqFMOM4ZBNK79jSTiFcLmScsqFZBUXSCNTrD4xlFzp0W")
                                res.status(200).json({
                                        msg: "login success",
                                        token
                                    })

                                    .catch(err => {
                                        console.log(err);

                                        res.status(500).json({
                                            msg: "error"
                                        })
                                    })
                            }

                        }
                    })
            })
    },
    
}