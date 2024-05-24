
// not support operator
const validOperator = (operator) => '+*'.includes(operator)? true : false


// checking for null operator
const isNullOperator = (operatir) => operatir == null ? true : false

// checking for first operaor
const isNullOperandOne = (operandOne) => operandOne == null? true: false

// checking second operand 
const isNullOperandTwo = (OperandTwo) => OperandTwo == null? true: false

// computing result
const result = (a, b, operator) => operator == '+*'[0] ? a + b : a * b

const compute = (a = null , b = null , operator = null) =>{
    if(validOperator(operator) && isNullOperandOne(a) == false && isNullOperandTwo(b) == false && isNullOperator(operator) == false) {
        return result(a, b, operator)
    }
    else
    {
    
        if(b == null && a == null && operator == null) return `Provide the operands and operator`
        if(a == null && b == null) return `Provide first and second operands`
        if(a == null && operator == null) return `Provide first operand and operator`
        if(b == null && operator == null) return `Provide second operand and operator `
        if(isNullOperandOne(a)) return `Provide first operand`
        if(isNullOperandTwo(b)) return `Provide second operand`
        if(isNullOperator(operator)) return `Provide operator`
        if(!validOperator(operator)) return  `Operation not supported....API only supports addition and multiplication..\n`
        
    }
}


module.exports = compute





