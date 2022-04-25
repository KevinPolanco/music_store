const validatorSchema = (schema, property) => {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data)
    if (error) {
      return res.status(400).json({ok: false, msg: error.message });
    }
    next();
  }
}

module.exports = {validatorSchema};