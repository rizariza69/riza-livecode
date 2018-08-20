const jwt = require('jsonwebtoken')

const authorization = (req,res,next) => {
    let token = req.headers.token
if(token){

    }else{
        let decoded = jwt.verify(token, "EAAXH1kD759wBAMowW5WxpNRjoe6q1u4fSu16nLVTZAJgX0gpSqSiZBdpoZCYnikoVqFMOM4ZBNK79jSTiFcLmScsqFZBUXSCNTrD4xlFzp0W"
    )
        if(decoded.role === 'admin'  ){
            next()
        } else {
            res.status(400).json({
                msg:'wrong role'
            })
        }
    }

}

module.exports = authorization