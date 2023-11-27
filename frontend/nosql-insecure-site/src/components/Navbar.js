import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const isUserSignedIn = !!localStorage.getItem('token');
    const navigate = useNavigate();

    const handleSignOut = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }

    return (
        <nav className='flex justify-between items-center bg-blue-700 text-white py-4 px-6 border-b border-blue-800'>
            <Link to='/' className='text-3xl font-bold hover:text-blue-300'>
                <h1>Test</h1>
            </Link>
            <ul className='flex gap-4'>
                {isUserSignedIn ? (
                    <>
                        <Link to='/account' className='py-2 px-4 hover:bg-blue-600 rounded-md transition'>
                            <li>Account</li>
                        </Link>
                        <li>
                            <button onClick={handleSignOut} className='py-2 px-4 bg-red-600 hover:bg-red-700 rounded-md transition'>
                                Sign Out
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <Link to='/login' className='py-2 px-4 hover:bg-blue-600 rounded-md transition'>
                            <li>Login</li>
                        </Link>
                        <Link to='/signup' className='py-2 px-4 hover:bg-blue-600 rounded-md transition'>
                            <li>Signup</li>
                        </Link>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
