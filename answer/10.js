const cache = new Set()
const max = 2000000
let ans = 0

for (let i = 2; i < max; i++) {
  if (cache.has(i)) {
    continue
  }

  let buf = i

  while (buf < max) {
    cache.add(buf)
    buf += i
  }
  ans += i
}
console.log(ans)
