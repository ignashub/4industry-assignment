import React from 'react';
import Button from '../Button';
import './UserCard.css';

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div className="user-card">
      <div className="user-badge">{user.initials}</div>
      <div className="user-info">
        <h2>{`${user.firstName} ${user.lastName}`}</h2>
        <p>Employee Number: {user.employeeNumber}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
      <div className="user-actions">
        <Button onClick={() => onEdit(user)}>Edit</Button>
        <Button onClick={() => onDelete(user)} type="delete">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
