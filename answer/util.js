require("./array_enhance")

function range(from, to) {
  return Array.from({ length: to - from + 1 }).map((_, i) => i + from)
}

function getPrimes(max) {
  const sieve = new Set()
  const primes = []

  for (let n = 2; n <= max; n++) {
    if (sieve.has(n)) {
      continue
    }
    range(1, Math.floor(max / n)).forEach((_, i) => sieve.add(i * n + n))
    primes.push(n)
  }

  return primes
}

function isPrime(num) {
  return num > 1 && getPrimes(Math.floor(num ** 0.5)).every(p => num % p !== 0)
}

function multiples(num, max) {
  return range(
    1,
    Math.ceil(max / num).map(i => num * i)
  )
}

const factorialCache = {}

function factorial(num) {
  if (num === 0) {
    return 1
  }

  if (factorialCache[num] !== undefined) {
    return factorialCache[num]
  }

  const ans = num * factorial(num - 1)

  factorialCache[num] = ans

  return ans
}

function combination(m, n) {
  return factorial(m) / factorial(n)
}

function factorize(num) {
  const factors = []
  let i = 2

  while (i ** 2 < num) {
    if (num % i !== 0) {
      i++
      continue
    }
    factors.push(i)
    num /= i
  }

  if (num > 1) {
    factors.push(num)
  }

  return factors
}

module.exports = {
  range,
  isPrime,
  getPrimes,
  multiples,
  factorial,
  combination,
  factorize,
}
