const express = require('express')
const bodyParse = require('body-parser')

/*
code implementation for business logic
Is provided in this helper.js
*/

const Compute = require('./helper') 

const port  = 8080;
const app = express()
app.use(bodyParse.json())



app.post('/', async(req, res, next) => {
    try {
        const operandOne = req.body.operandOne
        const operandTwo = req.body.operandTwo
        const operator = req.body.operator
        const result = await Compute(operandOne, operandTwo, operator)
        res.json({
            message: result
        })
        
    } catch (error) {
        res.status(505).send.json({
            error: "Server error"
        })
    
    }
})


app.listen(port,  () =>{
    console.log(`Application running on port ${port}`)
})