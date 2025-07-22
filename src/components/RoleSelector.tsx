import React from 'react';
import { useDispatch } from 'react-redux';
import { setRole } from '../redux/roleSlice';
import { useNavigate } from 'react-router-dom';

const RoleSelector: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    if (selected) {
      dispatch(setRole(selected));
      navigate('/form');
    }
  };

  return (
    <div>
      <h2>Select Role to Register</h2>
      <select onChange={handleSelect} defaultValue="">
        <option value="" disabled>Select a role...</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
        <option value="courier">Courier</option>
      </select>
    </div>
  );
};

export default RoleSelector;
