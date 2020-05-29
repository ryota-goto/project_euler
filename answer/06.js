let answer = 0
let sum = 0

for (let i = 1; i <= 100; i++) {
  sum += i
  answer -= i ** 2
}
answer += sum ** 2
console.log(answer)
