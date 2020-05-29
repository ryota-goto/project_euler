const util = require("./util")

require("./array_enhance")

const min = 12
const max = 28124
const abundant = new Set()
const sums = new Set(util.range(1, max - 1))

function isAbundant(num) {
  let sum = -num

  for (let i = 1; i * i <= num; i++) {
    if (num % i !== 0) {
      continue
    }
    sum += i

    const divided = num / i

    if (i !== divided) {
      sum += divided
    }

    if (sum > num) {
      return true
    }
  }

  return false
}

for (let i = min; i < max; i++) {
  if (!isAbundant(i)) {
    continue
  }

  abundant.add(i)
  abundant.forEach(a => sums.delete(a + i))
}

const answer = Array.from(sums).sum()

console.log(answer)
