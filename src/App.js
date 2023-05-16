import { useState } from 'react';
import './App.css';
import UserCard from './components/UserCard';
import UserModal from './components/UserModal/UserModal';
import Navbar from './components/Navbar';
import { getUsers, createUser } from './data/users';

function App() {
  const [modalMode, setModalMode] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(getUsers()); // Initialize users state with initial data

  const handleCreate = () => {
    setModalMode('create');
    setCurrentUser(null);
  };

  const handleEdit = (user) => {
    setModalMode('edit');
    setCurrentUser(user);
  };

  const handleCreateSubmit = (user) => {
    createUser(user);
  
    const userWithInitials = {
      ...user,
      initials: `${user.firstName[0]}${user.lastName[0]}`,
    };
  
    console.log('Create User:', userWithInitials);
    setModalMode(null);
  
    // Update the users array in the state
    setUsers((prevUsers) => [...prevUsers, userWithInitials]);
  };

  const handleEditSubmit = (user) => {
    console.log('Edit User:', user);
    setModalMode(null);
  };

  const handleDelete = (user) => {
    console.log(`Deleting user with employee number: ${user.employeeNumber}`);
    // Your actual delete logic goes here
  };

  const handleClose = () => {
    setModalMode(null);
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      <button onClick={handleCreate}>Create User</button>
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
          onClose={handleClose}
        />
      )}
    </div>
  );
}

export default App;
