const { login, getFruits } = require("./apiCalls")

// ASYNC => Callbacks, Promises

describe(" Test my API! ", () => {

  test(" login to my API ", async () => {

    const result = await login()
    console.log( result )

    expect( result.username ).toBeDefined()
    expect( result.age ).toBeDefined()

  })

  test(" should get me back some fruits ", async () => {

    const fruits = await getFruits()

    expect( fruits ).toBeDefined()
    expect( fruits.length ).toBeGreaterThanOrEqual(4)

  })

  // for handling expectations inside CALLBACKS, we need to pass the "done" function to a test
  // the done function we can use to tell jest, where our test actually should finish 
  // (otherwise jest will just run through the test and marking it "successful", not waiting for any callbacks to complete...
  test(" should do something in a callback", (done) => {

    setTimeout( () => {

      try {
        expect(5).toBe(3) // => should fail => we always need to handle exceptions in callbacks with try / catch always!
        // expect(5).toBe(5) // => would work!
        done() // mark SUCCESS on success case
      }
      catch(err) {
        done(err) // mark FAILURE to Jest => we pass the received error to the done function
      }

      // complete
    }, 2000)

    // at this point Jest thinks its done!
  })

})
