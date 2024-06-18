import React from 'react';
import Navbar from '../../components/common/navbar';
import ChatBubble from '../Patients/chatbot/chatBubble';
import Footer from '../../components/common/footer';

const FaqPage: React.FC = () => {
  const toggleFAQ = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;
    const content = button.nextElementSibling as HTMLElement;
    const expanded = button.getAttribute('aria-expanded') === 'true';

    button.setAttribute('aria-expanded', String(!expanded));
    content.style.maxHeight = !expanded ? `${content.scrollHeight}px` : '0';
  };

  return (
    <>
      <Navbar isLoggedIn={false} />
      <div className="pt-24 pb-14">
        <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="flex flex-col text-left md:w-1/2">
            <p className="inline-block font-semibold text-primary mb-4">UniCare FAQ</p>
            <p className="sm:text-4xl text-3xl font-extrabold text-base-content">Frequently Asked Questions</p>
          </div>
          <ul className="md:w-1/2">
            <li>
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded="false"
                onClick={toggleFAQ}
              >
                <span className="flex-1 text-base-content">How secure is my medical information?</span>
                <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                  <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
                </svg>
              </button>
              <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: 'max-height 0.3s ease-in-out 0s' }}>
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">
                    We prioritize the security of your medical information. UniCare uses advanced encryption and strict data protection measures to ensure your data is safe and confidential.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded="false"
                onClick={toggleFAQ}
              >
                <span className="flex-1 text-base-content">How do I schedule an appointment?</span>
                <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                  <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
                </svg>
              </button>
              <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: 'max-height 0.3s ease-in-out 0s' }}>
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">
                    You can schedule appointments through UniCare's intuitive online booking system or by contacting your preferred healthcare provider directly through our platform.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded="false"
                onClick={toggleFAQ}
              >
                <span className="flex-1 text-base-content">What is UniCare's approach to data privacy?</span>
                <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                  <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
                </svg>
              </button>
              <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: 'max-height 0.3s ease-in-out 0s' }}>
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">
                    UniCare is committed to protecting your privacy. We adhere to strict policies and use secure technologies like blockchain to ensure the confidentiality and integrity of your medical data.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded="false"
                onClick={toggleFAQ}
              >
                <span className="flex-1 text-base-content">Can I cancel my appointment online?</span>
                <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                  <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
                </svg>
              </button>
              <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: 'max-height 0.3s ease-in-out 0s' }}>
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">
                    Yes, you can cancel your appointment online through UniCare's portal. Simply log in to your account, navigate to your appointments, and follow the cancellation instructions provided.
                  </div>
                </div>
              </div>
            </li>
            <li>
              <button
                className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
                aria-expanded="false"
                onClick={toggleFAQ}
              >
                <span className="flex-1 text-base-content">How can I access my medical records securely?</span>
                <svg className="flex-shrink-0 w-4 h-4 ml-auto fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <rect y="7" width="16" height="2" rx="1" className="transform origin-center transition duration-200 ease-out false"></rect>
                  <rect y="7" width="16" height="2" rx="1" className="transform origin-center rotate-90 transition duration-200 ease-out false"></rect>
                </svg>
              </button>
              <div className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden" style={{ transition: 'max-height 0.3s ease-in-out 0s' }}>
                <div className="pb-5 leading-relaxed">
                  <div className="space-y-2 leading-relaxed">
                    UniCare provides a secure platform for accessing your medical records. Log in to your account and navigate to the medical records section where you can view and manage your health information.
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <ChatBubble />
      <Footer />
    </>
  );
};

export default FaqPage;
