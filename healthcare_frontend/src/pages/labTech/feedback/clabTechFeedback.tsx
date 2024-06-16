import React, { useState } from "react";
import Navbar from "../../../components/common/navbar"
import LabTechLayout from "../notifications/layoutLabTech";

const LabTechFeedback : React.FC = () => {
    const [rating, setRating] = useState<number | null>(null);

    const handleRatingChange = (value: number) => {
        setRating(value);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
      };

    return(
    <>
    <LabTechLayout>
    <Navbar isLoggedIn={true} />
      <section id='feedback'className="">
       <div className="p-5 sm:ml-64">
        <div className="grid gap-4 md:grid-cols-1 md:mt-20 sm:mt-14">
        <form onSubmit={handleSubmit} className="mt-16 p-4 bg-white shadow rounded">
            <h2 className="text-2xl font-bold mb-4">Feedback Form</h2>
            <div className="mb-4">
                <label htmlFor="name" className="block mb-1">Name</label>
                <input type="text" id="name" className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block mb-1">Email</label>
                <input type="email" id="email" className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="mb-4">
                <label htmlFor="feedback-to" className="block mb-1">Feedback to</label>
                <input type="text" id="feedback-to"
                placeholder="Unicare ..."
                 className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="mb-4">
                <label className="block mb-1">Rating</label>
                <div className="rating">
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <React.Fragment key={value}>
                        <input
                          type="radio"
                          id={`rating-${value}`}
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400 "
                          checked={rating === value}
                          onChange={() => handleRatingChange(value)}
                        />
                        <label htmlFor={`rating-${value}`}>{value}</label>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            <div className="mb-4">
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea id="message" className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Submit</button>
        </form>
        </div>
       </div>
      </section>
      </LabTechLayout>
    </>
    )
}

export default LabTechFeedback;