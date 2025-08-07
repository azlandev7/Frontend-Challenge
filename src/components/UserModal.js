import React from 'react';
import '../styles/UserModal.css';

const UserModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        <img
          src={user.avatar}
          alt={'${user.firstname} ${user.lastname}'}
          className="modal-avatar"
        />

        <h2 className="modal-name">
          {user.firstname} {user.lastname}
        </h2>
        <p className="modal-role">{user.role || 'No role provided'}</p>
        <p className="modal-join-date">Joined: {user.join_date || 'N/A'}</p>
        <p className="modal-description">
          {user.description || 'No description available.'}
        </p>
      </div>
    </div>
  );
};

export default UserModal;