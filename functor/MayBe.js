// MayBe 구현

const MayBe = function (val) {
  this.value = val;
};

MayBe.of = function (val) {
  return new MayBe(val);
};

// isNothing
MayBe.prototype.isNothing = function () {
  return this.value === null || this.value === undefined;
};

// map : nothing이면 null, 아니면 함수에 넣기
MayBe.prototype.map = function (fn) {
  return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this.value));
};

// 1) string을 STRING으로 반환
console.log(MayBe.of("string").map((x) => x.toUpperCase()));
console.log(MayBe.of(null).map((x) => x.toUpperCase()));
