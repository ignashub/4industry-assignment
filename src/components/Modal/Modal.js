import React, { useState } from 'react';
import Button from '../Button';
import './Modal.css';

const Modal = ({ mode, user, onSubmit, onDeleteConfirm, onClose }) => {
  const [employeeNumber] = useState(mode === 'edit' || mode === 'delete' ? user.employeeNumber : '');
  const [firstName, setFirstName] = useState(mode === 'edit' || mode === 'delete' ? user.firstName : '');
  const [lastName, setLastName] = useState(mode === 'edit' || mode === 'delete' ? user.lastName : '');
  const [email, setEmail] = useState(mode === 'edit' || mode === 'delete' ? user.email : '');
  const [phone, setPhone] = useState(mode === 'edit' || mode === 'delete' ? user.phone : '');

  const isDeleteMode = mode === 'delete';
  const modalHeaderClass = isDeleteMode ? "modal-header" : "modal-header-edit-create";
  const modalHeader = isDeleteMode
  ? `Delete ${user?.firstName} ${user?.lastName}`
  : mode === 'edit'
  ? `Edit ${user?.firstName} ${user?.lastName}`
  : 'Create User';

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
    onDeleteConfirm(user);
    onClose();
  };

  const handlePhoneChange = (event) => {
    const phoneInput = event.target.value;
  
    if (!isNaN(phoneInput) && Number.isInteger(Number(phoneInput)) && phoneInput.length <= 20) {
      setPhone(phoneInput);
    }
  };
  

  return (
    <div className={`modal ${mode ? 'open' : ''}`}>
      <div className="modal-content">
        <div className={modalHeaderClass}>
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
              onChange={(e) => {
                if (e.target.value.length <= 50) {
                  setFirstName(e.target.value)
                }
              }}
              required
            />
          </label>
          <label>
            Last Name:
            <input
              name="lastName"
              value={lastName}
              onChange={(e) => {
                if (e.target.value.length <= 50) {
                  setLastName(e.target.value)
                }
              }}
              required
            />
          </label>
          <label>
            Email:
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => {
                if (e.target.value.length <= 35) {
                  setEmail(e.target.value)
                }
              }}
              required
            />
          </label>
          <label>
            Phone:
            <input
              name="phone"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </label>
          <div className="button-group">
            <Button type="submit">Submit</Button>
            <Button onClick={onClose}>Close</Button>
          </div>
        </form>
        )}
      </div>
    </div>
  );
};

export default Modal;
