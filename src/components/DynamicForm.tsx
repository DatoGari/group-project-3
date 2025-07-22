import React, { useState } from 'react';
import type { FormField } from './types'; // Adjust path as needed
 // Adjust path as needed

type DynamicFormProps = {
  fields: FormField[];
  onSubmit: (data: Record<string, any>) => void;
};

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, onSubmit }) => {
  const [formData, setFormData] = useState<Record<string, any>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(field => (
        <div key={field.name} style={{ marginBottom: '1rem' }}>
          <label htmlFor={field.name}>
            {field.label}
            {field.required && '*'}
          </label>
          <div>
            {field.type === 'textarea' && (
              <textarea
                id={field.name}
                name={field.name}
                required={field.required}
                onChange={handleChange}
              />
            )}
            {field.type === 'select' && field.options ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                onChange={handleChange}
              >
                <option value="">-- Select --</option>
                {field.options.map(opt => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : field.type !== 'textarea' && (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                onChange={handleChange}
              />
            )}
          </div>
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
