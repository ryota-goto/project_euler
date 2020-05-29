function factorize(num) {
  const divideUntil = Math.floor(num ** 0.5)
  const accum = []

  for (let i = 2; i <= divideUntil; ) {
    if (num < i) {
      break
    }

    if (num % i === 0) {
      accum.push(i)
      num /= i
      continue
    }
    i++
  }
  accum.sort((a, b) => a - b)

  return accum
}

const target = 600851475143

console.log(factorize(target))
