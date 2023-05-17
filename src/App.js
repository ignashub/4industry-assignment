import { useState } from 'react';
import './App.css';
import UserCard from './components/UserCard';
import UserModal from './components/UserModal/UserModal';
import Navbar from './components/Navbar';
import { getUsers, createUser } from './data/users';

function App() {
  const [modalMode, setModalMode] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState(getUsers());
  const [userToDelete, setUserToDelete] = useState(null);

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

    setUsers((prevUsers) => [...prevUsers, userWithInitials]);
  };

  const handleEditSubmit = (user) => {
    console.log('Edit User:', user);
    setModalMode(null);
  };

  const handleDelete = (user) => {
    setUserToDelete(user);
    setModalMode('delete');
  };
  
  const handleDeleteConfirm = () => {
    if (userToDelete) {
      setUsers((prevUsers) => prevUsers.filter((user) => user.employeeNumber !== userToDelete.employeeNumber));
      setUserToDelete(null);
      setModalMode(null);
    }
  };
  
  const handleDeleteCancel = () => {
    setUserToDelete(null);
    setModalMode(null);
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
          onDeleteConfirm={handleDeleteConfirm} // Updated prop name
          onDeleteCancel={handleDeleteCancel} // Updated prop name
          onClose={handleClose}
        />
      )}
    </div>
  );
}

export default App;
