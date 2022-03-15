const express = require("express")
const {api} = require("./routers")
const {infoLog, warnLog, errLog} = require('./config').log
const {port, root} = require('./config').static

const app = express()
// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(__dirname + root))
app.use('/api', api)

app.listen(port, () => {
    infoLog(`server started and listening on port: ${port}`)
})