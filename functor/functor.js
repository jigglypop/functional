// 함수자(functor)
// 기본적인 객체로, 객체 내의 각 값을 실행할 때 새로운 객체를 실행하는 map 함수 구현
// 값을 가지고 있는 컨테이너

const Container = function (val) {
    this.value = val;
};

Container.of = function (value) {
    return new Container(value);
};

let A = new Container(1);
console.log(A);
let B = Container.of(1);
console.log(B);
