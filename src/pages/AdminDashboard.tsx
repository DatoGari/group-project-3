import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { updateWorkingHours } from '../redux/couriersSlice';

const AdminDashboard: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users);
  const couriers = useSelector((state: RootState) => state.couriers);
  const [editState, setEditState] = useState<Record<string, any>>({});

  const hours = Array.from({ length: 24 }, (_, h) =>
    [`${String(h).padStart(2, '0')}:00`, `${String(h).padStart(2, '0')}:30`]
  ).flat();

  const handleTimeChange = (courierId: string, day: string, type: 'start' | 'end', value: string) => {
    setEditState(prev => ({
      ...prev,
      [courierId]: {
        ...prev[courierId],
        [day]: {
          ...prev[courierId]?.[day],
          [type]: value,
        }
      }
    }));
  };

  const saveTime = (courierId: string, day: string) => {
    const data = editState[courierId]?.[day];
    if (data?.start && data?.end) {
      dispatch(updateWorkingHours({
        courierId,
        day,
        start: data.start,
        end: data.end
      }));
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Admin Dashboard</h1>

      {/* Users table remains unchanged */}

      <section style={{ marginTop: '2rem' }}>
        <h2>All Couriers</h2>
        <table border={1} cellPadding={6}>
          <thead>
            <tr>
              <th>Name</th><th>Phone</th><th>Vehicle</th><th>Schedule (Editable)</th>
            </tr>
          </thead>
          <tbody>
            {couriers.map((c: any) => (
              <tr key={c.id}>
                <td>{c.firstName} {c.lastName}</td>
                <td>{c.phoneNumber}</td>
                <td>{c.vehicle}</td>
                <td>
                  {Object.entries(c.workingDays).map(([day, hours]: any) => (
                    <div key={day} style={{ marginBottom: '0.5rem' }}>
                      <strong>{day}:</strong>
                      <select
                        value={editState[c.id]?.[day]?.start || hours.start}
                        onChange={(e) => handleTimeChange(c.id, day, 'start', e.target.value)}
                      >
                        {hours.map((h: string) => (
                          <option key={h} value={h}>{h}</option>
                        ))}
                      </select>
                      -
                      <select
                        value={editState[c.id]?.[day]?.end || hours.end}
                        onChange={(e) => handleTimeChange(c.id, day, 'end', e.target.value)}
                      >
                        {hours.map((h: string) => (
                          <option key={h} value={h}>{h}</option>
                        ))}
                      </select>
                      <button onClick={() => saveTime(c.id, day)}>Save</button>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminDashboard;
