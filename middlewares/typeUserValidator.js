const typeUserValidator = (req, res, next) => {
  if(req.type == "1") {
    return res.status(401).json({
        msg: "restricted user"
    })
  }
  next();
}

module.exports = typeUserValidator