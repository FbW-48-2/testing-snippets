import { useContext } from 'react';
import { DataContext } from './App';

function UserList() {

  const { users, toggleStatus } = useContext(DataContext)

  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user._id}
          className={ user.online ? 'online' : 'offline' }   
          onClick={() => toggleStatus( user._id )} 
        >{user.username}</div>
      ))}
    </div>
  );
}

export default UserList;
