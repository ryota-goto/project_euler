const util = require("./util")

function sumCornersOf(formSize) {
  if (formSize === 1) {
    return 1
  }

  return formSize ** 2 * 4 - (formSize - 1) * 6
}

let sum = 0
const size = 1001

util.range(0, (size - 1) / 2).forEach(i => {
  sum += sumCornersOf(i * 2 + 1)
})

console.log(sum)
