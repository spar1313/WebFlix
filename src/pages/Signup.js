import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signUp } = UserAuth();
  const navigate = useNavigate();

  // State to handle errors and success messages
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error message before each attempt
    setError('');
    setLoading(true);

    try {
      // Call signUp function and wait for the user creation process
      await signUp(email, password);
      navigate('/'); // Redirect on successful sign up
    } catch (error) {
      setError('Failed to create an account. Please try again.'); // Display error message
      console.log(error); // Log for debugging
    } finally {
      setLoading(false); // Stop loading animation when done
    }
  };

  return (
    <>
      <div className='w-full h-screen'>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold text-teal-500'>Sign Up</h1>
              <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rounded'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rounded'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                />
                <button
                  className={`bg-teal-500 py-3 my-6 rounded font-bold ${loading && 'opacity-50 cursor-not-allowed'}`}
                  disabled={loading} // Disable the button while loading
                >
                  {loading ? 'Signing Up...' : 'Sign Up'}
                </button>
                {error && <p className='text-orange-400'>{error}</p>} {/* Show error message */}
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p>
                    <input className='mr-2' type='checkbox' />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8'>
                  <span className='text-gray-600'>
                    Already subscribed to Webflix?
                  </span>{' '}
                  <Link to='/login' className='underline text-teal-500'>
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
