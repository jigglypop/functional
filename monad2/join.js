const MayBe = function (val) {
  this.value = val;
};

MayBe.of = function (val) {
  return new MayBe(val);
};

MayBe.prototype.isNothing = function () {
  return this.value === null || this.value === undefined;
};

MayBe.prototype.map = function (fn) {
  return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this.value));
};

MayBe.prototype.join = function () {
  return this.isNothing() ? MayBe.of(null) : this.value;
};

MayBe.prototype.chain = function (f) {
  return this.map(f).join();
};

console.log(MayBe.of(5).chain(MayBe.of(5)));
