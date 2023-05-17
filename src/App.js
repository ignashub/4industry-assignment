import { useState } from 'react';
import './App.css';
import UserCard from './components/UserCard';
import UserModal from './components/UserModal/UserModal';
import Navbar from './components/Navbar';
import { getUsers} from './data/users';
import Button from './components/Button';

function App() {
  const [modalMode, setModalMode] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(getUsers());
  const [nextEmployeeNumber, setNextEmployeeNumber] = useState(getNextEmployeeNumber(users));

  function getNextEmployeeNumber(users) {
    const maxEmployeeNumber = users.reduce((max, user) => {
      return user.employeeNumber > max ? user.employeeNumber : max;
    }, 0);
    return maxEmployeeNumber + 1;
  }

  const handleCreate = () => {
    setModalMode('create');
    setCurrentUser(null);
  };

  const handleEdit = (user) => {
    setModalMode('edit');
    setCurrentUser(user);
  };

  const handleCreateSubmit = (user) => {
    const newUser = {
      ...user,
      employeeNumber: nextEmployeeNumber,
    };
  
    const userWithInitials = {
      ...newUser,
      initials: `${newUser.firstName[0]}${newUser.lastName[0]}`,
    };
  
    console.log('Create User:', userWithInitials);
    setModalMode(null);
    setNextEmployeeNumber(nextEmployeeNumber + 1);
  
    setUsers((prevUsers) => [...prevUsers, userWithInitials]);
  };   

  const handleEditSubmit = (editedUser) => {
    const userWithInitials = {
      ...editedUser,
      initials: `${editedUser.firstName[0]}${editedUser.lastName[0]}`,
    };
  
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.employeeNumber === editedUser.employeeNumber ? userWithInitials : user
      )
    );
    setModalMode(null);
  };    

  const handleDelete = (user) => {
    setModalMode('delete');
    setCurrentUser(user);
  };
  
  const handleDeleteConfirm = () => {
    if (currentUser) {
      setUsers((prevUsers) => prevUsers.filter((user) => user.employeeNumber !== currentUser.employeeNumber));
      setCurrentUser(null);
      setModalMode(null);
    }
  };  

  const handleClose = () => {
    setModalMode(null);
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      <Button onClick={handleCreate}>Create User</Button>
      <div className="user-card-container">
        {users.map((user) => (
          <UserCard
            key={user.employeeNumber}
            user={user}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
      {modalMode && (
        <UserModal
          mode={modalMode}
          user={currentUser}
          onSubmit={modalMode === 'create' ? handleCreateSubmit : handleEditSubmit}
          onDeleteConfirm={handleDeleteConfirm}
          onClose={handleClose}
        />
      )}
    </div>
  );
}

export default App;
