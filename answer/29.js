/* global BigInt */
require("./array_enhance")

const as = Array.from({ length: 100 - 1 }).map((_, i) => BigInt(i) + 2n)
const terms = new Set()

as.forEachWith(as, (a, b) => terms.add(a ** b))
console.log(terms.size)
