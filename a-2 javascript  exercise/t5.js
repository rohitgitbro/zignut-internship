document.getElementById('printButton').addEventListener('click', printFibo);

function printFibo() {
    const steps = parseInt(document.getElementById('steps').value);
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear any previous results

    if (isNaN(steps) || steps < 1) {
        resultDiv.innerHTML = 'Please enter a valid number of steps.';
        return;
    }

    const fibonacciSeries = generateFibonacci(steps);
    resultDiv.innerHTML = `Fibonacci Series: ${fibonacciSeries.join(', ')}`;
}

function generateFibonacci(n) {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const series = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
}
