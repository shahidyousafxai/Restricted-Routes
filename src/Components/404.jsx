import React from 'react'

const ErrorPage = () => {
  return (
    <div className='flex justify-center items-center h-[90vh]'>
      <p className='flex flex-col items-center font-bold text-4xl'>
        <span className='text-7xl text-red-600'>404</span>
        <p>Page Not Found...!</p>
      </p>
    </div>
  )
}

export default ErrorPage
