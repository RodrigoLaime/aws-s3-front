const verifyFile = (req, res, next) => {
    if(!req.files || Object.keys(req.files).length === 0 || !req.files.file) 
    res.status(400).json({
        message: "No file uploaded"
    });
    next();
};

module.exports = {
    verifyFile
}