// src/pages/user/UserProfile.tsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { updateUserInfo } from '../../redux/userSlice'; // you'll create this next

const UserProfile: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user); // adjust if structure is different

  const [formData, setFormData] = useState(user);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateUserInfo(formData));
    alert('User info updated!');
  };

  if (!user) return <p>Loading user...</p>;

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input name="firstName" value={formData.firstName || ''} onChange={handleChange} />
        </label>
        <label>
          Last Name:
          <input name="lastName" value={formData.lastName || ''} onChange={handleChange} />
        </label>
        <label>
          PID:
          <input name="pid" value={formData.pid || ''} onChange={handleChange} />
        </label>
        <label>
          Phone Number:
          <input name="phoneNumber" value={formData.phoneNumber || ''} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input name="email" value={formData.email || ''} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input name="password" value={formData.password || ''} onChange={handleChange} type="password" />
        </label>
        {/* You can show profileImage and role as readonly */}
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Profile Image:</strong> <img src={user.profileImage} alt="profile" width={50} /></p>

        <button type="submit">Update Info</button>
      </form>
    </div>
  );
};

export default UserProfile;
