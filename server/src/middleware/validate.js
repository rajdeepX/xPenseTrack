export const validate = (schema) => {
  return (req, res, next) => {
    try {
      const validated = schema.parse(req.body)
      req.body = validated
      next()
    } catch (err) {
      res.status(400).json({
        error: 'Validation failed',
        details: err.errors,
      })
    }
  }
}
