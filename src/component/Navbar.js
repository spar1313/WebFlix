import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import SearchBar from './SearchBar';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 z-[100] w-full absolute bg-background">
  
      {/* Logo */}
      <Link to="/">
        <h1 className="text-primary text-4xl font-bold cursor-pointer">
          WEBFLIX
        </h1>
      </Link>
  
      {/* Search + Auth Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
  
        {/* SearchBar */}
        <SearchBar />
  
        {/* Auth Buttons */}
        {user?.email ? (
          <>
            <Link to="/account">
              <button className="text-white sm:ml-4 hover:text-accent transition-all duration-300">
                Account
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="bg-primary px-6 py-2 rounded cursor-pointer text-white sm:ml-2 hover:bg-accent transition-all duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="text-white sm:ml-4 hover:text-accent transition-all duration-300">
                Sign In
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-primary px-6 py-2 rounded cursor-pointer text-white sm:ml-2 hover:bg-accent transition-all duration-300">
                Sign Up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
