const compose =
    (...fn) =>
    (value) =>
        console.log(fn);
// reduce(fn.reverse(), (acc, fn) => fn(acc), value);

let splits = (str) => str.split("");
let count = (array) => array.length;
const count_splits = compose(count, splits);
count_splits("hello your reading about composition");
