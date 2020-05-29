const primes = [2]

for (let i = 3; primes.length < 10001; i++) {
  if (primes.every(p => i % p !== 0)) {
    primes.push(i)
  }
}
console.log(primes.pop())
