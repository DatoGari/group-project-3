import type { FormField } from '../components/types';

export const commonFields: FormField[] = [
  { name: 'firstName', label: 'First Name', type: 'text', required: true },
  { name: 'lastName', label: 'Last Name', type: 'text', required: true },
  { name: 'pid', label: 'PID', type: 'text', required: true },
  { name: 'phoneNumber', label: 'Phone Number', type: 'text', required: true },
  { name: 'email', label: 'Email', type: 'text', required: true },
  { name: 'password', label: 'Password', type: 'text', required: true },
  { name: 'profileImage', label: 'Profile Image URL', type: 'text' },
  { name: 'role', label: 'Role', type: 'select', required: true, options: [
    { label: 'Admin', value: 'admin' },
    { label: 'User', value: 'user' },
    { label: 'Courier', value: 'courier' }
  ] },
];

export const getAdminFields = (): FormField[] => [...commonFields];

export const getUserFields = (): FormField[] => [
  ...commonFields,
  { name: 'address.lng', label: 'Longitude', type: 'text', required: true },
  { name: 'address.lat', label: 'Latitude', type: 'text', required: true },
];

export const getCourierFields = (): FormField[] => [
  ...commonFields,
  { name: 'vehicle', label: 'Vehicle', type: 'text', required: true },
  // workingDays will be handled dynamically inside the form
];
