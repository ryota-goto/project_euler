function isCancellable(numerator, denomerator, remove) {
  if (numerator % 10 === 0 && denomerator % 10 == 0) {
    return false
  }

  const removedNumerator = Number(numerator.toString().replace(remove, ""))
  const removedDenomerator = Number(denomerator.toString().replace(remove, ""))

  return numerator * removedDenomerator === removedNumerator * denomerator
}

function possibleRemovers(numerator, denomerator) {
  const removerSet = new Set()

  ;[numerator, denomerator].forEach(n =>
    n
      .toString()
      .split("")
      .forEach(d => removerSet.add(d))
  )

  return removerSet
}

function check(numerator, denomerator) {
  if (numerator >= denomerator) {
    return
  }

  const remover = possibleRemovers(numerator, denomerator)

  if (remover.size === 0) {
    return false
  }

  return Array.from(remover.values()).some(r =>
    isCancellable(numerator, denomerator, r)
  )
}

const digits = [...Array.from({ length: 100 - 10 })].map((_, i) => i + 10)
const digitPairs = []

digits.forEach(d => digits.forEach(d2 => digitPairs.push([d, d2])))

console.log(digitPairs.filter(pair => check(...pair)))
