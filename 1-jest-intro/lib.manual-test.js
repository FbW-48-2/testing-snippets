const { sum } = require("./lib")

const result = sum(5,3) // 8

// FIRST TEST
if(result == 8) {
  console.log("All good! Expected 8, got 8")
}
else {
  console.error("[TEST FAILED]")
}