import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/auth";
import Navbar from "../../components/common/navbar";
import LoadingSpinner from "../../components/common/loadingSpinner";

interface FormData {
    hospitalFullName: string;
    password: string;
    email: string;
    phoneNumber: string;
    area: string;
    city: string;
    certification: File | null;
    specialty: string;
    role: string;
   
}

const SignupHospitals: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        hospitalFullName: "",
        password: "",
        email: "",
        phoneNumber: "",
        area: "",
        city: "",
        certification: null,
        specialty: "",
        role: "hospital",
    });

    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const value = e.target.value;
        setConfirmPassword(value);   
      }
  

    const handleCertificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null; // Get the first selected file or null
        setFormData({ ...formData, certification: file });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            if (formData.password !== confirmPassword) {
                throw new Error("Passwords do not match");
            }

            await AuthService.registerHospitals(formData);
            console.log("Registration successful");
            navigate("/");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return(
        <div className='signup-hospitals'>
            <Navbar isLoggedIn={false} />
            <div className="flex items-center justify-center p-12 mt-20">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="hospitalFullName" className="mb-3 block text-base font-medium text-[#07074D] required">
                                Hospital Name
                            </label>
                            <input
                                type="text"
                                name="hospitalFullName"
                                id="hospitalFullName"
                                placeholder="Hospital Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                value={formData.hospitalFullName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="phoneNumber" className="mb-3 block text-base font-medium text-[#07074D] required">
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
                            <label htmlFor="specialty" className="mb-3 block text-base font-medium text-[#07074D] required">
                                Specialty
                            </label>
                            <input
                                type="text"
                                name="specialty"
                                id="specialty"
                                placeholder="Enter hospital specialty"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                value={formData.specialty}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-5">
                        <label htmlFor="certificate" className="mb-3 block text-base font-medium text-[#07074D]">
                            Certificate (PNG, JPEG, etc.)
                        </label>
                        <input
                            type="file"
                            name="certificate"
                            id="certificate"
                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            onChange={handleCertificationChange}  
                            accept=".pdf,.jpg,.jpeg,.png"   
                            required                   />
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

export default SignupHospitals;
 