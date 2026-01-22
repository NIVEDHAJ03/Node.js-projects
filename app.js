const num1 = parseInt(process.argv[2]);
const operator = process.argv[3];
const num2 = parseInt(process.argv[4]);

let result;

if (operator === '+') result = num1 + num2;
else if (operator === '-') result = num1 - num2;
else if (operator === '*') result = num1 * num2;
else if (operator === '/') result = num1 / num2;
else result = 'Invalid operator';

console.log('Result:', result);
