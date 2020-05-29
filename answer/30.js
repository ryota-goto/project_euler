const util = require("./util")

require("./array_enhance")

const max = 9 ** 5 * 6

function isSumOfFifthPowers(num) {
  return (
    num
      .toString()
      .split("")
      .map(i => Number(i) ** 5)
      .sum() === num
  )
}

console.log(util.range(2, max).filter(isSumOfFifthPowers).sum())
