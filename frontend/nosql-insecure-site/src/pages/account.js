import React from 'react'

function Account() {
    // Assuming you might fetch user details or similar
    const username = 'User'; // Placeholder for username

    return (
        <div className='w-full h-screen bg-gray-800 flex flex-col justify-center items-center'>
            <h2 className='text-4xl text-white mb-6'>Welcome to your ACCOUNT, {username}!</h2>
            <div className='bg-gray-700 p-6 rounded-lg shadow-lg'>
                <h3 className='text-2xl text-blue-400 mb-4'>Account Details</h3>
                <p className='text-lg text-gray-300 mb-2'>Username: {username}</p>
                {/* Additional account details can go here */}
                <p className='text-lg text-gray-300'>Email: user@example.com</p>
                {/* You can add more account related information here */}
            </div>
            <button className='mt-6 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md'>
                Edit Profile
            </button>
        </div>
    )
}

export default Account
