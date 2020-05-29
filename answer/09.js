for (let a = 1; a < 334; a++) {
  for (let b = a; 1000 - a - b >= b; b++) {
    const c = 1000 - a - b

    if (a * a + b * b === c * c) {
      console.log(a * b * c)
      break
    }
  }
}
