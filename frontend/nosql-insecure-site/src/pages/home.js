import React from 'react'

function Home() {
  return (
    <div className='w-full h-screen bg-gray-800 flex flex-col justify-center items-center space-y-6'>
      <div>
        <h2 className='text-4xl text-blue-400 font-bold'>HOME</h2>
      </div>
      
      <div className='bg-gray-700 p-6 rounded-lg shadow-lg text-center'>
        <h3 className='text-2xl text-red-500 mb-4'>NoSQL Injection Vulnerability Test Site</h3>
        <p className='text-lg text-gray-300'>
          This site is intentionally designed to be vulnerable to NoSQL injection attacks for educational and testing purposes. 
          It demonstrates how such vulnerabilities can be exploited and why it's crucial to secure your applications.
        </p>
        <p className='text-lg text-gray-300 mt-4'>
          Warning: This site is insecure by design. Do not enter real or sensitive information.
        </p>
      </div>

      {/* Additional content or functional components can be added here */}
    </div>
  )
}

export default Home
