const {infoLog, warnLog, errLog} = require('../config').log

const calculator = ({n1, n2, opr}, res) => {
    try{
        if(!n1 || !n2 || !opr) {
            throw new Error('Insufficient Params')
        }
        let result = null
        switch(opr) {
            case '+':
                result = n1 + n2
                break
            case '-':
                result = n1 - n2
                break
            case '*':
                result = n1 * n2
                break
            case '/':
                result = n1 / n2
                break
            default:
                res.send(`
                    <h1>Calculate error</h1>
                `)
        }
        res.send(`
            <h1>Calculate:<h1>
            <p>${n1} ${opr} ${n2} = ${result}</p>
        `)
    } catch(err) {
        errLog(err)
        res.send(`
                    <h1>Error: ${errLog}</h1>
                `)
    }
}

module.exports = {
    calculator
}