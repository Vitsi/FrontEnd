import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../../assets/images/logos/logoblackleaf.png';
import { GoBell } from 'react-icons/go';
import { VscAccount } from 'react-icons/vsc';

const Navbar: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const profileImage = useSelector((state: any) => state.user.profileImage);

  return isLoggedIn ? (
    <nav className="navbar fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img src={logo} alt="Unicare Logo" className="h-6 w-auto mr-2" />
        </div>
        <div className="flex-none flex items-center mr-3">
            <GoBell className="h-7 w-7 mr-1" aria-hidden="true" />
          <div className="relative p-2 ml-3">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="h-8 w-8 rounded-full" />
            ) : (
              <VscAccount className="h-7 w-7 mr-1" aria-hidden="true" />
            )}
          </div>
        </div>
      </div>
    </nav>
  ) : (
    <nav className="navbar fixed top-0 z-50 w-full bg-white shadow-md">
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <img src={logo} alt="Unicare Logo" className="h-6 w-auto mr-2" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <details>
              <summary>Sign Up</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <Link to="/signup-patient">Patient</Link>
                </li>
                <li>
                  <Link to="/signup-hospital">Hospital</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  </nav>  
  );
};

export default Navbar;
