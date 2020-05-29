const cache = {}

function fibo(n = 0) {
  if (n === 1) {
    return 1
  }

  if (n === 2) {
    return 2
  }

  if (cache[n] !== undefined) {
    return cache[n]
  }

  const result = fibo(n - 1) + fibo(n - 2)

  cache[n] = result

  return result
}

let sum = 0
let i = 1
let result = fibo(i)

while (result < 4 * 1000000) {
  if (result % 2 === 0) {
    sum += result
  }
  result = fibo(++i)
}
console.log(sum)
