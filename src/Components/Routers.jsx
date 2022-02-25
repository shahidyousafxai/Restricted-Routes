import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import { useAuth } from './Auth'
import Admin from './Admin'
import SuperAdmin from './SuperAdmin'
import User from './User'
import Guest from './Guest'
import EntryPoint from './EntryPoint'
import ErrorPage from './404'
import Login from './Login'
// import RequireAuth from './RequireAuth'

const Routers = () => {
  const value = localStorage.getItem('route')
  // const auth = useAuth()
  // console.log(auth.value)
  if (
    value !== 'admin' &&
    value !== 'superadmin' &&
    value !== 'user' &&
    value !== 'guest'
  ) {
    return (
      <Routes>
        <Route path='/' element={<EntryPoint />} />
        <Route path='*' element={<Login />} />
      </Routes>
    )
  } else if (value === 'admin') {
    return (
      <Routes>
        <Route path='admin' element={<Admin />} />
        <Route path='user' element={<User />} />
        <Route path='guest' element={<Guest />} />
        <Route path='/' element={<EntryPoint />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    )
  } else if (value === 'superadmin') {
    return (
      <Routes>
        <Route path='admin' element={<Admin />} />
        <Route path='superadmin' element={<SuperAdmin />} />
        <Route path='user' element={<User />} />
        <Route path='guest' element={<Guest />} />
        <Route path='/' element={<EntryPoint />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    )
  } else if (value === 'user') {
    return (
      <Routes>
        <Route path='user' element={<User />} />
        <Route path='guest' element={<Guest />} />
        <Route path='/' element={<EntryPoint />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    )
  } else if (value === 'guest') {
    return (
      <Routes>
        <Route path='guest' element={<Guest />} />
        <Route path='/' element={<EntryPoint />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    )
  }
  // else {
  //   return (
  //     <Routes>
  //       <Route path='/' element={<EntryPoint />} />
  //     </Routes>
  //   )
  // }
}

export default Routers
