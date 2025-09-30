import React from 'react';
import '../styles/AddUserForm.css';

const AddUserForm = ({ name, email, setName, setEmail, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="add-user-form">
    <h2>Új felhasználó hozzáadása</h2>
    <input
      type="text"
      placeholder="Név"
      value={name}
      onChange={e => setName(e.target.value)}
    />
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={e => setEmail(e.target.value)}
    />
    <button type="submit">Hozzádás</button>
  </form>
);

export default AddUserForm;
