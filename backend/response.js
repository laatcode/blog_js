exports.success = (req, res, message, status = 200) => res.status(status).json({
    body: message,
    error: ''
})

exports.error = (req, res, message, status = 400, error) => {
    console.error(error)
    res.status(status).json({
        body: '',
        error: message
    })
}