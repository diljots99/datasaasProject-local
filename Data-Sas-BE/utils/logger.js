const winston = require("winston");
/**
 * Configurations of logger.
 */
const createLogger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.json()
  ),
  defaultMeta: { service: "dataSaas-service" },
  transports: [
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    new winston.transports.File({ filename: `log/error.log`, level: "error" }),
    new winston.transports.File({
      filename: "log/combined.log",
      level: "info",
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  createLogger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
  module.exports = {
    successlog: createLogger,
    errorlog: createLogger,
  };
}else{
  module.exports = {
    successlog: createLogger,
    errorlog: createLogger,
  };
}


