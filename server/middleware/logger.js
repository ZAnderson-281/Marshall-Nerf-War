// ===== Loggers =====
const logger = (req, res, next) => {
    // Get the request url and log to the console
    console.log(`${req.protocol} // ${req.get('host')}${req.originalUrl}`);
    next()
}

// Export the loggers
module.exports = logger;