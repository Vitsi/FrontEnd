import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileImage } from '../../../redux/userSlice';
import Navbar from '../../../components/common/navbar';
import PatientSidebar from '../../../components/sidebar/patientSidebar';
import { VscAccount } from 'react-icons/vsc';
import { RootState } from '../../../redux/store';

// interface FormData {
//   patientFullName: string;
//   password?: string;
//   email: string;
//   phoneNumber: string;
//   dateOfBirth: string;
//   emergencyContacts: string;
//   area: string;
//   city: string;
//   role: string;
//   profileImage: string | null;
// }

const PatientAccount: React.FC = () => {
  const dispatch = useDispatch();
  const profileImage = useSelector((state: RootState) => state.user.profileImage);
//   const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [tempImage, setTempImage] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const imageUrl = URL.createObjectURL(file);
      setTempImage(imageUrl);
      //setImagePreview(imageUrl); 
      setErrorMessage(null);
    } else {
      setErrorMessage('Please select a valid image file.');
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setShowDialog(true);
  };

  const handleConfirm = () => {
    if (tempImage) {
      dispatch(setProfileImage(tempImage));
    }
    setShowDialog(false);
  };

  const handleCancel = () => {
    setShowDialog(false);
  };

  return (
    <>
      <Navbar isLoggedIn={true} />
      <PatientSidebar />
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
                  onChange={handleFileChange}
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
              <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D] required">
                Full Name
              </label>
              <input
                type="text"
                name="patientFullName"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                // value={formData.patientFullName}
                // onChange={handleChange}
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
                // value={formData.phoneNumber}
                // onChange={handleChange}
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
                        // value={formData.dateOfBirth}
                        // onChange={handleChange}
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
                    // value={formData.emergencyContacts}
                    // onChange={handleChange}
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
                // value={formData.email}
                // onChange={handleChange}
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
                                // value={formData.area}
                                // onChange={handleChange}
                            />
                            </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                            <select
                                name="city"
                                id="city"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                // value={formData.city}
                                // onChange={handleChangeSelect}
                            >
                                    <option value="">Select City</option>
                                    <option value="city1">Addis Ababa</option>
                                </select>
                            </div>
                            </div>      
                        </div>
                        </div>
            <button
              type="submit"
              className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Update Account
            </button>
          </form>
        </div>
      </div>

      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-lg font-semibold mb-4">Are you want to update your information?</h2>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancel}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
              >
                No, keep editing
              </button>
              <button
                onClick={handleConfirm}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PatientAccount;
