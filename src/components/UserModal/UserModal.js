import React, { useState } from 'react';
import Button from '../Button';
import './UserModal.css';

const UserModal = ({ mode, user, onSubmit, onDeleteConfirm, onDeleteCancel, onDelete, onClose }) => {
  const [employeeNumber, setEmployeeNumber] = useState(mode === 'edit' ? user.employeeNumber : '');
  const [firstName, setFirstName] = useState(mode === 'edit' ? user.firstName : '');
  const [lastName, setLastName] = useState(mode === 'edit' ? user.lastName : '');
  const [email, setEmail] = useState(mode === 'edit' ? user.email : '');
  const [phone, setPhone] = useState(mode === 'edit' ? user.phone : '');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      employeeNumber,
      firstName,
      lastName,
      email,
      phone,
    };

    onSubmit(newUser);
  };

  const handleDelete = () => {
    onDelete(user);
    onClose();
  };

  const isDeleteMode = mode === 'delete';
  const modalHeader = isDeleteMode ? 'Delete User' : mode === 'edit' ? 'Edit User' : 'Create User';

  return (
    <div className={`user-modal ${mode ? 'open' : ''}`}>
      <div className="user-modal-content">
        <div className="user-modal-header">
          <h1>{modalHeader}</h1>
        </div>
        {isDeleteMode ? (
          <div>
            <p>Are you sure you want to delete this user?</p>
            <Button onClick={onDeleteConfirm} type="delete">Delete</Button> {/* Updated to onDeleteConfirm */}
            <Button onClick={onDeleteCancel}>Cancel</Button> {/* Updated to onDeleteCancel */}
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Employee Number:
              <input
                name="employeeNumber"
                value={employeeNumber}
                onChange={(e) => setEmployeeNumber(e.target.value)}
                required
              />
            </label>
            <label>
              First Name:
              <input
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </label>
            <label>
              Last Name:
              <input
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </label>
            <label>
              Email:
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Phone:
              <input
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </label>
            <Button type="submit">Submit</Button>
            <Button onClick={onClose}>Close</Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default UserModal;
