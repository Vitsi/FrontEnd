import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/common/navbar';
import HcpSidebar from '../../../components/sidebar/hcpSidebar';

interface StaffFormData {
  id: number;
  fullName: string;
  password: string;
  staffId: string;
  email: string;
  phoneNumber: number;
  dateOfBirth?: string; 
  specialization?: string;
  role: 'doctor' | 'lab tech' | 'clerk';
  gender: string;
  age?: number;
}

const calcAge = (dateofBirth: string): number => {
  const birthDate = new Date(dateofBirth);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;}

const RegisterStaff: React.FC = () => {
  const [formData, setFormData] = useState<StaffFormData>({
    id: 0,
    fullName: '',
    password: '',
    staffId: '',
    email: '',
    phoneNumber: 0,
    role: 'doctor',
    gender: '',
  });

  useEffect(() => {
    if (formData.dateOfBirth) {
      setFormData((prevData) => ({
        ...prevData,
        age: calcAge(formData.dateOfBirth),
      }));
    }
  }, [formData.dateOfBirth]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'phoneNumber' || name === 'id' ? parseInt(value) : value,
    }));
    if (name === 'staffId') {
      setFormData((prevData) => ({
        ...prevData,
        password: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Perform form submission logic here
  };

  return (
    <>
    <section>
      <Navbar isLoggedIn={true}/>
      <HcpSidebar/>
    <div className="p-1 sm:ml-64">
    <div className="grid gap-4 md:grid-cols-1">
    <div className="flex items-center justify-center p-6 sm:p-10 md:p-10 lg:p-10">
      <div className="mx-auto w-full max-w-[650px] bg-white">
        <div className="p-6 sm:p-10 md:p-10 lg:p-10">
            <div className="mb-3 text-2xl font-medium text-center text-blue-500">
              Register New Staff Form
            </div>
          </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="fullName" className="mb-3 block text-base font-medium text-[#07074D]">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formData.fullName}
              onChange={handleChange} />
          </div>

          <div className="mb-5">
            <label htmlFor="staffId" className="mb-3 block text-base font-medium text-[#07074D]">
              Staff ID
            </label>
            <input
              type="text"
              name="staffId"
              id="staffId"
              placeholder="Staff ID"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formData.staffId}
              onChange={handleChange} />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="mb-3 block text-base font-medium text-[#07074D]">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formData.password}
              onChange={handleChange} />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formData.email}
              onChange={handleChange} />
          </div>
          <div className="mb-5">
            <label htmlFor="phoneNumber" className="mb-3 block text-base font-medium text-[#07074D]">
              Phone Number
            </label>
            <input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Enter your phone number"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formData.phoneNumber}
              onChange={handleChange} />
          </div>
          <div className="mb-5 flex items-center">
                    <div className="w-3/4">
                      <label htmlFor="dateOfBirth" className="mb-3 block text-base font-medium text-[#07074D]">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        id="dateOfBirth"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        value={formData.dateOfBirth || ''}
                        max={new Date().toISOString().split('T')[0]} // Ensures the date cannot be in the future
                        onChange={handleChange}
                      />
                    </div>
                    <div className="ml-3 w-1/4">
                      <label htmlFor="age" className="mb-3 block text-base font-medium text-[#07074D]">
                        Age
                      </label>
                      <input
                        type="text"
                        name="age"
                        id="age"
                        readOnly
                        className="w-full rounded-md border border-[#e0e0e0] bg-white-100 py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        value={formData.age !== undefined ? formData.age : ''}
                      />
                    </div>
                  </div>
          {(formData.role === 'doctor' || formData.role === 'lab tech') && (
            <div className="mb-5">
              <label htmlFor="specialization" className="mb-3 block text-base font-medium text-[#07074D]">
                Specialization
              </label>
              <input
                type="text"
                name="specialization"
                id="specialization"
                placeholder="Enter specialization"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={formData.specialization || ''}
                onChange={handleChange} />
            </div>
          )}
          <div className="mb-5">
                    <label htmlFor="gender" className="mb-3 block text-base font-medium text-[#07074D]">
                      Gender
                    </label>
                    <select
                      name="gender"
                      id="gender"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      value={formData.gender}
                      onChange={handleChange}
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
          <div className="mb-5">
            <label htmlFor="role" className="mb-3 block text-base font-medium text-[#07074D]">
              Profession
            </label>
            <select
              name="role"
              id="role"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="doctor">Doctor</option>
              <option value="lab tech">Lab Technician</option>
              <option value="clerk">Clerk</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Add Staff Memebr
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
    </section>
    </>
  );
};

export default RegisterStaff