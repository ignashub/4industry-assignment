import { useState } from 'react';
import './App.css';
import UserCard from './components/UserCard';
import UserModal from './components/UserModal/UserModal';
import Navbar from './components/Navbar';
import { getUsers, createUser } from './data/users';
import Button from './components/Button';

function App() {
  const [modalMode, setModalMode] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(getUsers());

  const handleCreate = () => {
    setModalMode('create');
    setCurrentUser(null);
  };

  const handleEdit = (user) => {
    setModalMode('edit');
    setCurrentUser(user);
  };

  const handleCreateSubmit = (user) => {
    if (modalMode === 'create' && currentUser === null) {
      createUser(user);
  
      const userWithInitials = {
        ...user,
        initials: `${user.firstName[0]}${user.lastName[0]}`,
      };
  
      console.log('Create User:', userWithInitials);
      setModalMode(null);
  
      setUsers((prevUsers) => [...prevUsers, userWithInitials]);
    }
  };  

  const handleEditSubmit = (user) => {
    console.log('Edit User:', user);
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
