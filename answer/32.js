const util = require("./util")

require("./array_enhance")

function canBePandigital(num, remains) {
  const constructableMax = remains
    .map(a => a.toString())
    .sort()
    .reverse()
    .join("")

  if (num > constructableMax) {
    return
  }

  const max = Math.min(num / 2, Number(constructableMax))

  for (let i = 1; i <= max; i++) {
    if (num % i !== 0) {
      continue
    }

    const divided = num / i

    if (
      constructableMax ===
      (i.toString() + divided.toString()).split("").sort().reverse().join("")
    ) {
      return true
    }
  }

  return false
}

let sum = 0

function eachProcess(current, numbers) {
  if (current > 9999) {
    return
  }

  if (current > 1001 && canBePandigital(current, numbers)) {
    sum += current
  }

  const remains = new Set(numbers)

  numbers.forEach(n => {
    remains.delete(n)

    const arrayed = Array.from(remains)

    eachProcess(current * 10 + n, arrayed)
    remains.add(n)
  })
}

eachProcess(0, util.range(1, 9))
console.log(sum)
