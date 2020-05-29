let last = 1n
let boobee = 1n
const max = 10n ** 999n
let i = 2

for (; last < max; i++) {
  const next = last + boobee

  boobee = last
  last = next
}
console.log(i)
