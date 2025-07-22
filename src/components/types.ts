// types.ts
export type FieldOption = {
  label: string;
  value: string | number;
};

export type FormField = {
  name: string;
  label: string;
  type: 'text' | 'number' | 'checkbox' | 'textarea' | 'select';
  required?: boolean;
  options?: FieldOption[]; // only for select
};
