import React from 'react';
import '../styles/UserList.css';

const UserList = ({
  users, editingId, editedName, editedEmail,
  setEditedName, setEditedEmail,
  handleUpdate, handleEditCancel,
  handleEditStart, handleDelete
}) => {
  return (
    <div>
      <h2>Felhasználók Listája</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>#ID</th>
            <th>Név</th>
            <th>Email</th>
            <th>Regisztráció</th>
            <th>Műveletek</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>

                {editingId === user.id ? (
                  <>
                    <td>
                      <input
                        type="text"
                        value={editedName}
                        onChange={e => setEditedName(e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="email"
                        value={editedEmail}
                        onChange={e => setEditedEmail(e.target.value)}
                      />
                    </td>
                  </>
                ) : (
                  <>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </>
                )}

                <td>{new Date(user.created_at).toLocaleDateString()}</td>

                <td>
                  {editingId === user.id ? (
                    <>
                      <button className="save" onClick={() => handleUpdate(user.id)}>Mentés</button>
                      <button className="cancel" onClick={handleEditCancel}>Mégse</button>
                    </>
                  ) : (
                    <>
                      <button className="edit" onClick={() => handleEditStart(user)}>Szerkesztés</button>
                      <button className="delete" onClick={() => handleDelete(user.id)}>Törlés</button>
                    </>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="center">Nincsenek felhasználók az adatbázisban.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

