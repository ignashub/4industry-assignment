import React from 'react'
import { useState } from 'react';
import UserCard from '../../components/UserCard';
import Modal from '../../components/Modal';
import Navbar from '../../components/Navbar';
import { getUsers} from '../../data/users';
import './Home.css';

const Home = () => {
	const [modalMode, setModalMode] = useState(null);
	const [currentUser, setCurrentUser] = useState(null);
	const [users, setUsers] = useState(getUsers());
	const [nextEmployeeNumber, setNextEmployeeNumber] = useState(getNextEmployeeNumber(users));
	const [deletingUsers, setDeletingUsers] = useState([]);

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
	
	const handleDeleteConfirm = (userToDelete) => {
		setModalMode(null);
		setDeletingUsers((prevDeletingUsers) => [...prevDeletingUsers, userToDelete.employeeNumber]);
	
		setTimeout(() => {
			setUsers((prevUsers) =>
				prevUsers.filter((user) => user.employeeNumber !== userToDelete.employeeNumber)
			);
			setDeletingUsers((prevDeletingUsers) =>
				prevDeletingUsers.filter((employeeNumber) => employeeNumber !== userToDelete.employeeNumber)
			);
		}, 500);
	};
	

	const handleClose = () => {
		setModalMode(null);
	};

  return (
      <div className="Home">
        <Navbar onCreate={handleCreate} currentPage={"home"}/>
        <div className="cards-container">
          <div className="user-card-container">
          {users.map((user, index) => (
            <UserCard
              key={user.employeeNumber}
              user={user}
              onEdit={handleEdit}
              onDelete={handleDelete}
              style={{ animationDelay: `${index * 0.1}s` }}
							isDeleting={deletingUsers.includes(user.employeeNumber)}
            />
          ))}
          </div>
        </div>
        {modalMode && (
          <Modal
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

export default Home