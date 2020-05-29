const util = require("./util.js")

function getReciprocalCycles(num) {
  let molecule = 10
  const cycleMemo = {}
  let index = 1

  for (; cycleMemo[molecule] === undefined; index++) {
    cycleMemo[molecule] = index
    molecule %= num
    molecule *= 10
  }

  if (molecule === 0) {
    return 0 // 一応
  }

  return index - cycleMemo[molecule]
}

const primes = util.getPrimes(1000)
const answer = primes
  .map(p => {
    return {
      p,
      len: getReciprocalCycles(p),
    }
  })
  .sort((a, b) => a.len - b.len)
  .pop().p

console.log(answer)
