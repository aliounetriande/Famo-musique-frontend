import React, { useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayPlaylist from './DisplayPlaylist'
import Login from './Login'
import Register from './Register'

const Display = () => {

  const displayRef = useRef();
  const location = useLocation();
  const isPlaylist = location.pathname.includes("playlist");
  const playlistId = isPlaylist ? location.pathname.slice(-1) : "";
  

  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
       <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/playlist/:id" element={<DisplayPlaylist />} />
       </Routes>
    </div>
  )
}

export default Display