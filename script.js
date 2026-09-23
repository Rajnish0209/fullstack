const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

let statistics = {
  data: ages,
  count: function () {
    return this.data.length;
  },
  sum: function () {
    return this.data.reduce((acc, cur) => acc + cur, 0);
  },
  min: function () {
    return Math.min(...this.data);
  },
  max: function () {
    return Math.max(...this.data);
  },
  range: function () {
    return this.max() - this.min();
  },
  mean: function () {
    return this.sum() / this.count();
  },
  median: function () {
    let sortArr = this.data.sort((a, b) => a - b);
    let mid = Math.floor(sortArr.length / 2);
    return mid % 2 !== 0 ? sortArr[mid] : (sortArr[mid] + sortArr[mid + 1]) / 2;
  },
  mode: function () {},
  var: function () {
    return (
      this.data
        .map((ele) => (ele - this.mean()) ** 2)
        .reduce((acc, cur) => acc + cur, 0) / this.count()
    );
  },
  std: function () {
    return Math.sqrt(this.var());
  },
  freqDist: function () {},
};

console.log(statistics.count());
console.log(statistics.sum());
console.log(statistics.min());
console.log(statistics.max());
console.log(statistics.range());
console.log(statistics.mean());
console.log(statistics.median());
console.log(statistics.var());
console.log(statistics.std());
