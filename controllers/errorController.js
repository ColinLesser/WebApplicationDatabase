

exports.logError = (error, req, res, next) => {
    console.error(error.stack);
    next(error);
};

const httpStatus = require("http-status-codes");
exports.respondNoResourceFound = (req, res) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.send(`${errorCode} | The page does not exist!`);
};

exports.respondInternalError = (error, req, res, next) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occurred: ${error.stack}`);
    res.status(errorCode);
    //res.send(`${errorCode} | Sorry, internal error occurred!`);
    res.send('Sorry, you are not qualified or you entered invalid input. Please return to the last page');
};