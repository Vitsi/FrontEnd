// useForm.ts

import { useState } from 'react';

interface FormData {
  labTechFullName?: string;
  labTechStaffId? :string;
  clerkFullName?: string;
  clerkStaffId? :string;
  doctorFullName?: string;
  doctorId? :string;
  specialization? : string;
  phoneNumber: string;
  dateOfBirth: string;
  emergencyContacts: string;
  email: string;
  area: string;
  city: string;
  password: string;
}

const useForm = (initialValues: FormData) => {
  const [formData, setFormData] = useState<FormData>(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return {
    formData,
    handleChange,
    handleChangeSelect,
  };
};

export default useForm;
