const compose = (a, b) => (c) => a(b(c));
const number = compose(Math.round, parseFloat);
console.log(number(3.14));
