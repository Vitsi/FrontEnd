import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../../components/common/navbar"
import { setProfileImage } from "../../../redux/userSlice";
import { RootState } from '../../../redux/store';
import { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import useForm from "../../../hooks/useForm";
import AdminLayout from "../notifications/layoutAdmin";

const initialFormValues = {
    adminId: '',
    adminFullName: '',
    password: '',
    email: '',
    role: 'admin',
};

const AdminAccount: React.FC = () => {
    const dispatch = useDispatch();
    const profileImage = useSelector((state: RootState) => state.user.profileImage);
    const [tempImage, setTempImage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const { formData, handleChange } = useForm(initialFormValues);
    const [error, setError] = useState<string | null>(null);

    const handleChangeImg = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && file.type.startsWith('image/')) {
            const imageUrl = URL.createObjectURL(file);
            setTempImage(imageUrl);
            setErrorMessage(null);
        } else {
            setErrorMessage('Please select a valid image file.');
        }
    };

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setConfirmPassword(value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            if (formData.password !== confirmPassword) {
                throw new Error("Passwords do not match");
            }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            setError(error.message);
            return;
        }

        if (tempImage) {
            dispatch(setProfileImage(tempImage));
        }
        setError(null);
    };

    return (
        <>
            <AdminLayout>
                <Navbar isLoggedIn={true} />
                <div className="p-5 sm:ml-64">
                    <div className="grid gap-4 md:grid-cols-1 md:mt-20 sm:mt-14">
                        <form onSubmit={handleSubmit}>
                            <div className="flex items-center space-x-6 mb-5 mt-4">
                                <div className="shrink-0">
                                    {tempImage || profileImage ? (
                                        <img
                                            id="preview_img"
                                            className="size-24 object-cover rounded-full"
                                            src={tempImage || profileImage}
                                            alt="Profile Photo"
                                        />
                                    ) : (
                                        <VscAccount className="size-24" aria-hidden="true" />
                                    )}
                                </div>
                                <label className="block">
                                    <span className="sr-only">Choose profile photo</span>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleChangeImg}
                                        className="block w-full text-sm text-slate-500
                                        file:mr-4 file:py-2 file:px-4
                                        file:rounded-full file:border-0
                                        file:text-sm file:font-semibold
                                        file:bg-blue-50 file:text-blue-700
                                        hover:file:bg-violet-100"
                                    />
                                </label>
                            </div>
                            {errorMessage && (
                                <div className="text-red-500 mb-4">{errorMessage}</div>
                            )}
                            <div className="mb-5">
                                <label htmlFor="adminFullName" className="mb-3 block text-base font-medium text-[#07074D] required">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="adminFullName"
                                    id="adminFullName"
                                    placeholder="Full Name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    value={formData.adminFullName}
                                    onChange={handleChange}
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
                                />
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
                                    onChange={handleConfirmPasswordChange}
                                />
                            </div>
                            {error && (
                                <div className="form-group">
                                    <div className="alert alert-danger text-red-500" role="alert">
                                        {error}
                                    </div>
                                </div>
                            )}
                            <button
                                type="submit"
                                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                            >
                                Update Account
                            </button>
                        </form>
                    </div>
                </div>
            </AdminLayout>
        </>
    );
}

export default AdminAccount;
