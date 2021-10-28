const multiply = (x, y, z) => {
    console.log(x * y * z);
};

let curry = (fn) => {
    if (typeof fn !== "function") {
        throw Error("함수를 입력하세요");
    }
    return function curring(...args) {
        if (args.length < fn.length) {
            return function () {
                const temp = args.concat([...arguments].slice());
                console.log(temp);
                return curring.apply(null, temp);
            };
        }
        return fn.apply(null, args);
    };
};
curry(multiply)(1)(2)(3);
