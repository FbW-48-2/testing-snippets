import { useContext } from 'react';
import { DataContext } from './App';

function UserAdminList() {

  const { getAdmins, toggleStatus } = useContext(DataContext)

  return (
    <div className="user-list">
      { getAdmins().map(admin => (
        <div key={admin._id} 
          className={ admin.online ? 'online' : 'offline' }   
          onClick={() => toggleStatus( admin )} 
        >{admin.username}</div>
      ))}
    </div>
  );
}

export default UserAdminList;
