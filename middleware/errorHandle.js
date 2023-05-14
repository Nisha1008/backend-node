const { constants } = require("../constants")
const errorHandle = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:

            res.json({ title: "validation failed", message: err.message, stackTrace: err.stack })
            break;
        case constants.NOT_FOUND:

            res.json({ title: "Not Found", message: err.message, stackTrace: err.stack })
            break;

        case constants.UNAUTHORIZES:

            res.json({ title: "Unauthorized failed", message: err.message, stackTrace: err.stack })
            break;
        case constants.FORBIDDON:

            res.json({ title: "forbbidom", message: err.message, stackTrace: err.stack })
            break;
        case constants.SERVER_ERROR:

            res.json({ title: "server", message: err.message, stackTrace: err.stack })
            break;

        default:
            console.log("no error all good")
            break;
    }
}
module.exports = errorHandle; 