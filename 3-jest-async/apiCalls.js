
const login = async () => {

  // Promise resolve we can fake a successful API call
  return Promise.resolve( { 
    _id: "123", 
    username: "Shreekesh",
    age: 25
  } )

}

const getFruits = async () => {

  // Promise resolve we can fake a successful API call
  return Promise.resolve( [ 'Banana', 'Cherry', 'Lemon', 'Cranberry' ] )

}

// fetch() => resolve() => then(data)

module.exports = { login, getFruits }