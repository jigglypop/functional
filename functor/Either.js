const Nothing = function (val) {
  this.value = val;
};

Nothing.of = function (val) {
  return new Nothing(val);
};
