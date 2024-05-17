import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/common/navbar';
import AuthService from '../../services/auth';
import LoadingSpinner from '../../components/common/loadingSpinner';

interface FormData {
    patientFullName : string;
    password :  string;
    email : string;
    phoneNumber : string;
    dateOfBirth: string ;
    emergencyContacts: string;
    area: string;
    city: string;
    role: string;
}

const SignupPatients: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        patientFullName: "",
        password: "",
        email: "",
        phoneNumber: "",
        dateOfBirth: "",
        emergencyContacts: "",
        area: "",
        city: "",
        role: "patient"
    });
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }
    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };
    const handleConfirmPasswordChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setConfirmPassword(value);
    }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try{ 
            if(formData.password !== confirmPassword){
                throw new Error("Passwords do not match");
            }

            await AuthService.registerPatients(formData);
            console.log("registration successful");
            navigate("/");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch(error: any){
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    
  return (
    <div className='signup-patients'>
        <Navbar isLoggedIn={false}/>
      <div className="flex mt-14 items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form  onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D] required">
                Full Name
              </label>
              <input
                type="text"
                name="patientFullName"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={formData.patientFullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D] required">
                Phone Number
              </label>
              <input
                type="text"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter your phone number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md "
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                    <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D] required">
                        Date Of Birth
                    </label>
                    <input
                        type="date"
                        name="dateOfBirth"
                        id="date"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        required
                   />
                    </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D] required">
                    Emergency Contact
                </label>
                <input
                    type="text"
                    name="emergencyContacts"
                    id="emergencyContacts"
                    placeholder="Phone number"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value={formData.emergencyContacts}
                    onChange={handleChange}
                    required
                />
                </div>
              </div>
            <div className="mb-5">
              <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D] required">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div> 
            <div className="mb-3">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                            Address Details
                        </label>
                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <input
                                type="text"
                                name="area"
                                id="area"
                                placeholder="Enter area"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                value={formData.area}
                                onChange={handleChange}
                            />
                            </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                            <select
                                name="city"
                                id="city"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                value={formData.city}
                                onChange={handleChangeSelect}
                            >
                                    <option value="">Select City</option>
                                    <option value="city1">Addis Ababa</option>
                                </select>
                            </div>
                            </div>      
                        </div>
                        </div>
            <div className="mb-5">
              <label htmlFor="password" className="mb-3 block text-base font-medium text-[#07074D] required">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="confirm-password" className="mb-3 block text-base font-medium text-[#07074D] required">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="Confirm your password"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange }
                required
              />
            </div>
             <p>I hereby acknowledge that the information provided above is accurate and complete to the best of my knowledge. I understand that any false or misleading information may affect the quality of my healthcare and that it is my responsibility to inform the healthcare provider of any changes to this information.</p>
            <div>
              <button
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
               Register
              </button>
            </div>

          </form>
          <p className="mt-8 text-center text-sm text-gray-500">
                Already have an account?{' '}
            <Link to="/signin">
                <a href="signin" 
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Login
                </a>
            </Link>
        </p>
        {error && (
            <div className="form-group">
                <div className="alert alert-danger" role="alert">
                {error}
                </div>
            </div>
         )}

        </div>
      </div>
      {loading && <LoadingSpinner />}
    </div>
  );
}

export default SignupPatients;
