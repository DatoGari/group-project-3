// src/routes/AppRoutes.tsx

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RoleSelector from '../components/RoleSelector';
import DynamicForm from '../components/DynamicForm';
import AdminDashboard from '../pages/AdminDashboard';
import UserProfile from '../pages/UserProfile';
import CourierProfile from '../pages/CourierProfile';
import CourierListForUser from '../pages/CourierListForUser';
import OtherCouriersInfo from '../pages/OtherCouriersInfo';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../redux/authSlice';
import { v4 as uuidv4 } from 'uuid';

import { useSelector } from 'react-redux';
import { type RootState } from '../redux/store';
import {
  getAdminFields,
  getUserFields,
  getCourierFields,
} from '../utils/formFieldsByRole';

const AppRoutes = () => {
  const selectedRole = useSelector((state: RootState) => state.role.selectedRole);
  const auth = useSelector((state: RootState) => state.auth);

  const getFieldsByRole = () => {
    switch (selectedRole) {
      case 'admin':
        return getAdminFields();
      case 'user':
        return getUserFields();
      case 'courier':
        return getCourierFields();
      default:
        return [];
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Routes>
      <Route path="/" element={<RoleSelector />} />
      
        <Route
            path="/form"
            element={
                <DynamicForm
                fields={getFieldsByRole()}
                onSubmit={(data) => {
                    const userId = uuidv4();
                    const role = data.role as 'admin' | 'user' | 'courier';
                    dispatch(login({ role, userId }));

                    if (role === 'admin') {
                        navigate('/admin/dashboard');
                    } else if (role === 'user') {
                        navigate('/user/profile');
                    } else if (role === 'courier') {
                        navigate('/courier/profile');
                    }
                }}
                />
            }
        />


      {/* Role-based routes */}
      <Route path="/admin/dashboard" element={
        auth.role === 'admin' ? <AdminDashboard /> : <Navigate to="/" />
      } />
      <Route path="/user/profile" element={
        auth.role === 'user' ? <UserProfile /> : <Navigate to="/" />
      } />
      <Route path="/user/couriers" element={
        auth.role === 'user' ? <CourierListForUser /> : <Navigate to="/" />
      } />
      <Route path="/courier/profile" element={
        auth.role === 'courier' ? <CourierProfile /> : <Navigate to="/" />
      } />
      <Route path="/courier/all" element={
        auth.role === 'courier' ? <OtherCouriersInfo /> : <Navigate to="/" />
      } />
    </Routes>
  );
};

export default AppRoutes;
