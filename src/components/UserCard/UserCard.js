import React, { useState } from 'react';
import Button from '../Button';
import './UserCard.css';

const UserCard = ({ user, onEdit, onDelete, style, isDeleting }) => {
  const handleDelete = () => {
    onDelete(user);
  };

  console.log(isDeleting);

  return (
    <div
      className={isDeleting ? 'user-card-slide-out' : 'user-card'}
      style={style}
      >
      <div className="user-badge">{user.initials}</div>
      <div className="user-info">
        <h2>{`${user.firstName} ${user.lastName}`}</h2>
        <p>
          <strong>Employee Number:</strong> {user.employeeNumber}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
      </div>
      <div className="user-actions">
        <Button onClick={() => onEdit(user)}>Edit</Button>
        <Button onClick={handleDelete} type="delete">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
