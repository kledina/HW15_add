const numbers = [];
for (let i = -10; i <= 10; i++) {
    numbers.push(i);
}
console.log(numbers);

let positiveNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i]>=0) {
        positiveNumbers.push(numbers[i]);
    }
}

for (let i = 0; i < positiveNumbers.length; i++) {
    const element = positiveNumbers[i]
    const squaredElement = element * element;
    positiveNumbers[i] = squaredElement;
}

for (let i = 1; i < positiveNumbers.length; i++)
    for (let j = 0; j < i; j++)
        if (positiveNumbers[i] > positiveNumbers[j]) {
            let x = positiveNumbers[i];
            positiveNumbers[i] = positiveNumbers[j];
            positiveNumbers[j] = x;
        }

console.log(positiveNumbers);