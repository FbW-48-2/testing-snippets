const { sum, subtract } = require("./lib")

// TEST FAIL first

// RED - GREEN - REFACTOR

describe("test my calculator library", () => {

  // SPECIFICATION => expect how the app should be
  test("should some up two numbers", () => {
    const result = sum(5, 3)
    expect(result).toBe(8)
  })

})