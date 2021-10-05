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

  test(" should do something in a callback", (done) => {

    setTimeout( () => {

      try {
        expect(5).toBe(5) // => should fail!
        done() // mark SUCCESS on success case
      }
      catch(err) {
        done(err) // mark FAILURE to Jest
      }

      // complete
    }, 2000)

    // at this point Jest thinks its done!
  })

})