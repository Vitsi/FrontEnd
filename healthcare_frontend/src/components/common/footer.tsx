import logo from '../../assets/images/logos/logowhiteleaf.png';

const Footer = () => {
    
  return (
    <footer className="w-full bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-12 pt-14 pb-20 max-w-md mx-auto md:max-w-xl lg:max-w-full">
          {/* Our Services */}
          <div className="block">
            <h4 className="text-xl text-white font-bold mb-7">Unicare</h4>
            <ul className="text-lg transition-all duration-500">
              <li className="mb-6"><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li className="mb-6"><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
              {/* <li className="mb-6"><a href="javascript:;" className="text-gray-400 hover:text-white">Pricing</a></li> */}
              <li className="mb-6"><a href="/features" className="text-gray-400 hover:text-white">Features</a></li>
              {/* <li><a href="javascript:;" className="text-gray-400 hover:text-white">Pro Version</a></li> */}
            </ul>
          </div>
          {/* Support */}
          <div className="block">
            <h4 className="text-xl text-white font-bold mb-7">Support</h4>
            <ul className="text-lg transition-all duration-500">
              <li className="mb-6"><a href="/customer-suport" className="text-gray-400 hover:text-white">Customer Suppor</a></li>
              <li className="mb-6"><a href="/cookies" className="text-gray-400 hover:text-white">Cookies</a></li>
              <li className="mb-6"><a href="/faq" className="text-gray-400 hover:text-white">FAQ</a></li>
            </ul>
          </div>
          {/* Legal */}
          <div className="block">
            <h4 className="text-xl text-white font-bold mb-7">Legal</h4>
            <ul className="text-lg transition-all duration-500">
              <li className="mb-6"><a href="/general-information" className="text-gray-400 hover:text-white">General Information</a></li>
              <li className="mb-6"><a href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li className="mb-6"><a href="/TandC" className="text-gray-400 hover:text-white">Terms & Conditions</a></li>
            </ul>
          </div>
          {/* socials */}
          <div className="block">
            <h4 className="text-xl text-white font-bold mb-7">Socials</h4>
            <ul className="text-lg transition-all duration-500 flex flex-col">
                <li className="mb-6 flex items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  width="26" height="26" viewBox="0 0 26 26"><path fill="#FFFFFF" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" /></svg>
                <a href="javascript:;" className="text-gray-400 hover:text-white">LinkedIn</a>
                </li>
                <li className="mb-6 flex items-center">
                  <svg color='white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 24 24">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                    </svg>
                <a href="javascript:;" className="text-gray-400 hover:text-white">Twitter</a>
                </li>
                <li className="mb-6 flex items-center">
                <svg color='white' xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-facebook" viewBox="0 0 24 24">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                <a href="javascript:;" className="text-gray-400 hover:text-white">Facebook</a>
                </li>
                <li className="mb-6 flex items-center">
                  <svg color='white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 24 24">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                <a href="javascript:;" className="text-gray-400 hover:text-white">Instagram</a>
                </li>
            </ul>
            </div> 
    </div>
        {/* End Grid */}
        <div className="py-7 border-t border-gray-700">
          <div className="flex items-center justify-center flex-col lg:space-y-0 space-y-8 lg:justify-between lg:flex-row">
          <img src={logo} alt="Unicare Logo" className="h-6 w-auto mr-2" />
            <p className="text-lg text-gray-400">© 2024 UniCare. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
