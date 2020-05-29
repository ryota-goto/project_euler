const nums = Array.from({ length: 20 }).map((_, i) => i + 1)
const factors = [1]

nums.forEach(i => {
  factors.forEach(f => {
    if (i % f === 0) {
      i /= f
    }
  })

  if (i > 1) {
    factors.push(i)
  }
})

console.log(factors)
console.log(factors.reduce((a, b) => a * b))
