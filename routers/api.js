const express = require("express")
const router = express.Router()
const controllers = require("../controllers")

const {infoLog} = require('../config').log

router.get('/addTwoNums', (req, res) => {
    infoLog('\'/addTwoNums\' requested')
    controllers.fns.calculator(req.query, res)
})

module.exports = router