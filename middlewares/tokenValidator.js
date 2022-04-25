const jwt = require('jsonwebtoken')

const tokenValidator = (req, res, next) => {
    try {

        if(!req.headers?.authorization) {
            throw new Error('token does not exist')
        }

        const token = req.headers.authorization.split(" ")[1];
        
        if(!token){
            throw new Error('Invalid format use Bearer')
        }
        
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        req.id = payload.id;
        req.type = payload.type;
        next();
    } catch (error) {
        if (error.message === "jwt malformed") {
            return res.status(401).json({
                ok: false,
                msg: "invalid format"
            })
        }
        if (error.message === "invalid token") {
            return res.status(401).json({
                ok: false,
                msg: "invalid token"
            })
        }
        if (error.message === "jwt expired") {
            return res.status(401).json({
                ok: false,
                msg: "expired token"
            })
        }
        return res.status(401).json({
            ok: false,
            msg: error.message
        })
    }
}

module.exports = tokenValidator;