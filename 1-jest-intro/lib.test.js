const { sum } = require("./lib")

// TEST CASE => test some func of my system
test(" should sum up two numbers ", () => {

  // call some func => and match result with our expectation
  const result = sum(5, 3) // => 8
  expect( result ).toBe( 8 )
})

test(" should fail to sum up ", () => {

  const result = sum(5, 3) // => 8
  expect( result ).not.toBe(10) // => ?

})