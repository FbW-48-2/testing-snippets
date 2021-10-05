const app = require("./app")
const supertest = require("supertest")

const insomnia = supertest( app ) // pass the API with all routes

test("should get all users", () => {

  insomnia.get("/users")
    .then(res => {
      expect(res.body.length).toBeGreaterThanOrEqual(0)
    })

})

test("should create a new user", (done) => {

  insomnia.post("/users")
    .send({ name: "Rob" })
    .then(res => {
      try {
        expect(res.body).toBeDefined()
        expect(res.body.name).toBe("Rob")
        done()
      }
      catch(err) {
        done(err)
      }
    })

})


test("should fail creating a new user", (done) => {

  insomnia.post("/users")
    .send({ username: "Rob" })
    .then(res => {
      try {
        expect(res.body.error).toBeDefined()
        done()
      }
      catch(err) {
        done(err)
      }
    })

})
