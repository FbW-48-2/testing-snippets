import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import UserList from './UserList';
import UserAdminList from './UserAdminList';
import { createContext, useState } from 'react';

export const DataContext = createContext()

function App() {

  const [users, setUsers ] = useState([
    { _id: "12", username: "Losrobbos", online: true, },
    { _id: "34", username: "Wasabis", online: true },
    { _id: "56", username: "Tim", online: true, status: true, admin: true },
    { _id: "78", username: "Shinhee", online: true, admin: true },
  ])

  const getAdmins = () => {
    return users.filter(user => user.admin)
  }

  //  ORIGINAL
  // DEAD SIN => someone changes the input parameters
  // DEAD SIN => someone changes the OUTPUT format of the function
  const toggleStatus = ( id ) => {

    const usersUpdated = users.map(( user ) => {
      return user._id == id ? 
      { ...user, online: ! user.online } :  // updates the status
      user // all other users => keep the status
    })
    
    setUsers( usersUpdated )
  }

  const sharedData = { users, getAdmins, toggleStatus }

  return (
    <DataContext.Provider value={ sharedData }>
      <div className="App">
        <header>
          <nav>
            <Link to="/users">Users</Link>
            <Link to="/admins">Admins</Link>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/">Hello there</Route>
            <Route path="/users" component={ UserList } />
            <Route path="/admins" component={ UserAdminList } />
          </Switch>
        </main>
      </div>
    </DataContext.Provider>
  );
}

export default App;
