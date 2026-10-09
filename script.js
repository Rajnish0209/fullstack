class Statistics {
  constructor(ages) {
    this.ages = ages;
  }
  count() {
    return this.ages.length;
  }
  sum() {
    return this.ages.reduce((acc, cur) => acc + cur, 0);
  }
  min() {
    return Math.min(...this.ages);
  }
  max() {
    return Math.max(...this.ages);
  }
  range() {
    return this.max() - this.min();
  }
  mean() {
    return this.sum() / this.count();
  }
  median() {
    let agesSort = this.ages.sort((a, b) => a - b);
    let len = agesSort.length;
    if (len % 2 == 0) {
      return (agesSort[len / 2 - 1] + agesSort[len / 2]) / 2;
    }
    return agesSort[(len - 1) / 2];
  }
  variance() {
    let sum = 0;
    this.ages.forEach((element) => {
      sum += (element - this.mean()) ** 2;
    });
    return sum / this.count();
  }
  std() {
    return Math.sqrt(this.variance());
  }
}

let statistics = new Statistics([
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
]);

console.log(statistics.count());
console.log(statistics.sum());
console.log(statistics.min());
console.log(statistics.max());
console.log(statistics.range());
console.log(statistics.mean());
console.log(statistics.median());
console.log(statistics.variance());
console.log(statistics.std());
