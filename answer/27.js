const util = require("./util")

require("./array_enhance")

const as = util.range(-999, 999).filter(i => i % 2 !== 0)
const bsSet = util.getPrimes(999)

function check(n, a, b) {
  return util.isPrime(n ** 2 + n * a + b)
}

let max = 0
let ans = undefined

as.forEachWith(Array.from(bsSet), (a, b) => {
  const maxBuf = max
  let i = 0

  for (; check(i, a, b); i++) {
    max = Math.max(max, i)
  }

  if (max > maxBuf) {
    ans = a * b
  }
})
console.log(ans)
