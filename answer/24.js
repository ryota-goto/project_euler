const util = require("./util")
const _limit = 1000000

function nthOfLexicograpics(limit = _limit, candidates = util.range(0, 9)) {
  if (candidates.length === 0) {
    return ""
  }

  const patterns = util.factorial(candidates.length - 1)
  const ind = Math.floor((limit - 1) / patterns)
  const head = candidates[ind]

  console.log(head)
  candidates.splice(ind, 1)

  return (
    head.toString() + nthOfLexicograpics(limit - patterns * ind, candidates)
  )
}

console.log(nthOfLexicograpics())
