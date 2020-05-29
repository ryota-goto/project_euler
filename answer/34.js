const factorialMemo = {
  1: 1,
}

function factorial(n) {
  if (n <= 1) {
    return 1
  }

  if (factorialMemo[n]) {
    return factorialMemo[n]
  }

  const result = n * factorial(n - 1)

  factorialMemo[n] = result

  return result
}

const max = 1999999
const answers = []

for (let i = 10; i < max; i++) {
  if (
    i ===
    i
      .toString()
      .split("")
      .map(factorial)
      .reduce((a, b) => a + b, 0)
  ) {
    answers.push(i)
  }
}
console.log(answers.reduce((a, b) => a + b))
