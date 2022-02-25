import React, { useState } from 'react'

const EntryPoint = () => {
  const [input, setInput] = useState('')

  const handleInput = () => {
    // console.log(input)
    if (input === '' || input === null) {
      alert('Please enter the correct value')
    } else {
      localStorage.setItem('route', input)
    }
  }
  return (
    <div className='flex justify-center mt-5'>
      <input
        type='text'
        className='border border-2 border-slate-400 outline-0 rounded indent-1'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className='bg-sky-600 rounded px-2 py-[2px] ml-[5px] text-white'
        onClick={handleInput}
      >
        Go!
      </button>
    </div>
  )
}

export default EntryPoint
