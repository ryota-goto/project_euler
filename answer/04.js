function isPalindrome(n) {
  const str = n.toString()

  return str === str.split("").reverse().join("")
}

let candidate = 0

for (let i = 999; i > 99; i--) {
  for (let j = i; j > 99; j--) {
    const multi = i * j

    if (candidate > multi) {
      break
    }

    const palindrome = isPalindrome(multi)

    if (!palindrome) {
      continue
    }

    if (candidate < multi) {
      candidate = multi
    }
    break
  }
}
console.log(candidate)
