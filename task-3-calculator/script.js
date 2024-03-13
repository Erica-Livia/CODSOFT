let currentResult = '';

function appendToResult(value) {
    currentResult += value;
    updateDisplay();
}

function calculateResult() {
    try {
        currentResult = eval(currentResult);
        updateDisplay();
    } catch (error) {
        clearResult();
        alert('Invalid expression');
    }
}

function clearResult() {
    currentResult = '';
    updateDisplay();
}

function deleteLastDigit() {
    currentResult = currentResult.slice(0, -1);
    updateDisplay();
}

function updateDisplay() {
    const resultInput = document.getElementById('result');
    resultInput.value = currentResult;
}