import React from 'react'
import { NavLink } from 'react-router-dom'
// import { useAuth } from 'react-router-dom'

const NavBar = () => {
  // const auth = useAuth()
  var value = localStorage.getItem('route')
  return (
    <div className='flex items-center h-[40px] bg-slate-300 px-9 text-black'>
      {value === 'admin' ? (
        <>
          <NavLink to='/' className=''>
            Home
          </NavLink>
          <NavLink to='/admin' className='ml-5'>
            Admin
          </NavLink>
          <NavLink to='/user' className='ml-5'>
            User
          </NavLink>
          <NavLink to='/guest' className='ml-5'>
            Guest
          </NavLink>
        </>
      ) : value === 'superadmin' ? (
        <>
          {' '}
          <NavLink to='/' className=''>
            Home
          </NavLink>
          <NavLink to='/admin' className='ml-5'>
            Admin
          </NavLink>
          <NavLink to='/superadmin' className='ml-5'>
            Super Admin
          </NavLink>
          <NavLink to='/user' className='ml-5'>
            User
          </NavLink>
          <NavLink to='/guest' className='ml-5'>
            Guest
          </NavLink>
        </>
      ) : value === 'user' ? (
        <>
          {' '}
          <NavLink to='/' className=''>
            Home
          </NavLink>
          <NavLink to='/user' className='ml-5'>
            User
          </NavLink>
          <NavLink to='/guest' className='ml-5'>
            Guest
          </NavLink>
        </>
      ) : value === 'guest' ? (
        <>
          <NavLink to='/' className=''>
            Home
          </NavLink>
          <NavLink to='/guest' className='ml-5'>
            Guest
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to='/' className=''>
            Home
          </NavLink>
          <NavLink to='/admin' className='ml-5'>
            Admin
          </NavLink>
          <NavLink to='/superadmin' className='ml-5'>
            Super Admin
          </NavLink>
          <NavLink to='/user' className='ml-5'>
            User
          </NavLink>
          <NavLink to='/guest' className='ml-5'>
            Guest
          </NavLink>
        </>
      )}
    </div>
  )
}

export default NavBar
