import React, { useState } from 'react';
import Button from '../Button';
import './UserModal.css';

const UserModal = ({ mode, user, onSubmit, onDeleteConfirm, onClose }) => {
  const [employeeNumber, setEmployeeNumber] = useState(mode === 'edit' || mode === 'delete' ? user.employeeNumber : '');
  const [firstName, setFirstName] = useState(mode === 'edit' || mode === 'delete' ? user.firstName : '');
  const [lastName, setLastName] = useState(mode === 'edit' || mode === 'delete' ? user.lastName : '');
  const [email, setEmail] = useState(mode === 'edit' || mode === 'delete' ? user.email : '');
  const [phone, setPhone] = useState(mode === 'edit' || mode === 'delete' ? user.phone : '');
  const [isDeleting, setIsDeleting] = useState(false);

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
    setIsDeleting(true);
    onDeleteConfirm(user);
  };

  const handleAnimationEnd = () => {
    if (isDeleting) {
      onClose();
    }
  };

  const isDeleteMode = mode === 'delete';
  const modalHeader = isDeleteMode
    ? `Delete ${user?.firstName} ${user?.lastName}`
    : mode === 'edit'
    ? `Edit ${user?.firstName} ${user?.lastName}`
    : 'Create User';

  return (
    <div
      className={`user-modal ${mode ? 'open' : ''} ${isDeleting ? 'deleting' : ''}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <div className="user-modal-content">
        <div className="user-modal-header">
          <h1>{modalHeader}</h1>
        </div>
        {isDeleteMode ? (
          <div>
            <p>Are you sure you want to delete this user?</p>
            <p><strong>Employee Number:</strong> {user?.employeeNumber}</p>
            <p><strong>First Name:</strong> {user?.firstName}</p>
            <p><strong>Last Name:</strong> {user?.lastName}</p>
            <div className="button-group">
              <Button onClick={handleDelete} type="delete" className="delete-button">
                Delete
              </Button>
              <Button onClick={onClose} className="cancel-button">
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
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
