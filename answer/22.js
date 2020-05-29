const https = require("https")

function mainProcess(nameList) {
  const base = "A".charCodeAt() - 1

  console.log(
    nameList
      .sort()
      .map(
        (n, i) =>
          (i + 1) *
          n
            .split("")
            .map(c => c.charCodeAt() - base)
            .reduce((a, b) => a + b)
      )
      .reduce((a, b) => a + b)
  )
}

let names = ""
const request = https.get(
  "https://projecteuler.net/project/resources/p022_names.txt",
  res => {
    res.on("data", d => {
      names += d
    })
  }
)

request.on("error", e => {
  console.log(e)
})

request.on("close", () => mainProcess(JSON.parse("[" + names + "]")))
