import React from 'react';
import '../styles/UserCard.css';

const UserCard = ({ user, onViewMore }) => {
  return (
    <div className="user-card">
      <img
        src={user.avatar}
        alt={'${user.firstname} ${user.lastname}'}
        className="user-avatar"
      />
      <h3 className="user-name">{user.firstname} {user.lastname}</h3>
      <button className="view-more-btn" onClick={() => onViewMore(user)}>
        View More
      </button>
    </div>
  );
};

export default UserCard;