
// TEST SUITE
describe(" should check equality of things heavily ", () => {
  
  test(" should check string or number ", () => {
    expect( "5" ).toEqual( "5" )
  })
  
  test(" should check two objects ", () => {
  
    // order of keys in an object does never matter 
    const user1 = { admin: true, username: "Shinhee" }
    const user2 = { username: "Shinhee", admin: true }
  
    expect( user1 ).toEqual( user2 ) // for object content comparison => toEqual
  })
  
  test(" should check two array ", () => {
  
    const list1 = ['Christoph', 'Priya']
    const list2 = ['Christoph', 'Priya']
  
    expect( list1 ).toEqual( list2 )
  
  })

})
