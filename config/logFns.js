const logger = require("pino")({
    transport: {
        target: "pino-pretty",
        options: {
            colorize: true,
            translateTime: "SYS:dd-mm-yyyy HH:MM:ss",
            ignore: "pid,hostname",
        }
    }
})

const infoLog = (msg) => {
    logger.info("[Tao's Server Info]: %s", msg)
}

const warnLog = (msg) => {
    logger.warn("[Tao's Server Warn]: %s", msg)
}

const errLog = (msg) => {
    logger.error("[Tao's Server Error]: %s", msg)
}

const fatalLog = (msg) => {
    logger.error("[Tao's Server Fatal]: %s", msg)
}

module.exports = {
    infoLog,
    warnLog,
    errLog,
    fatalLog
}