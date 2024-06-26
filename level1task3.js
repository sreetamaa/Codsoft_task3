let currentInput = '';
let operator = '';
let firstOperand = '';


function append(value) {
    currentInput += value;
    document.getElementById('display').textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').textContent = '0';
}


function calculate() {
    if (currentInput.includes('+')) {
        let operands = currentInput.split('+');
        let result = parseFloat(operands[0]) + parseFloat(operands[1]);
        document.getElementById('display').textContent = result;
    } else if (currentInput.includes('-')) {
        let operands = currentInput.split('-');
        let result = parseFloat(operands[0]) - parseFloat(operands[1]);
        document.getElementById('display').textContent = result;
    } else if (currentInput.includes('*')) {
        let operands = currentInput.split('*');
        let result = parseFloat(operands[0]) * parseFloat(operands[1]);
        document.getElementById('display').textContent = result;
    }else if (currentInput.includes('<')) {
        let operands = currentInput.split('<');
        let result = parseFloat(operands[0]) < parseFloat(operands[1]);
        document.getElementById('display').textContent = result;
    } else if (currentInput.includes('/')) {
        let operands = currentInput.split('/');
        if (parseFloat(operands[1]) === 0) {
            document.getElementById('display').textContent = 'Error';
        } else {
            let result = parseFloat(operands[0]) / parseFloat(operands[1]);
            document.getElementById('display').textContent = result;
        }
    }

    currentInput = '';
    operator = '';
}
