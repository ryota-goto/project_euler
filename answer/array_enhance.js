Array.prototype.sum = function () {
  return this.reduce((a, b) => a + b, 0)
}
Array.prototype.product = function () {
  return this.reduce((a, b) => a * b, 0)
}

Array.prototype.numSort = function () {
  return this.sort((a, b) => a - b)
}

Array.prototype.combinate = function (b) {
  return this.map(t => b.map(b => [t, b])).reduce((a, b) => a.concat(b), [])
}
Array.prototype.forEachWith = function (pair, func) {
  this.forEach(a => {
    pair.forEach(b => func(a, b))
  })
}
