import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../api/users';
import UserCard from './UserCard';
import UserModal from './UserModal';
import Loader from './Loader';
import '../styles/UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        const data = await fetchUsers();
        setUsers(data);
        setError('');
      } catch (err) {
        setError(err.message || 'Something went wrong.');
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  return (
    <div className="user-list-container">
      {loading && <Loader />}
      {error && <div className="error-msg">{error}</div>}

      <div className="user-grid">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onViewMore={(user) => setSelectedUser(user)}
          />
        ))}
      </div>

      {selectedUser && (
        <UserModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </div>
  );
};

export default UserList;