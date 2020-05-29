function countPatterns(target = 200, coins = [1, 2, 5, 10, 20, 50, 100, 200]) {
  if (target === 0) {
    return 1
  }

  const using = coins[0]

  if (using === undefined || target < using) {
    return 0
  }

  let sum = 0

  for (; target >= 0; target -= using) {
    sum += countPatterns(target, coins.slice(1))
  }

  return sum
}

console.log(countPatterns())
