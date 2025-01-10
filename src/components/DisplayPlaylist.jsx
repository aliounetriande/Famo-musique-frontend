import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { playlistsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayPlaylist = () => {

    const {id} = useParams();
    const playlistData = playlistsData[id];
    const {playWithId} = useContext(PlayerContext)

  return (
    <>
        <Navbar/>
        <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
            <img className='w-48 rounded' src={playlistData.image} alt="" />
            <div className='flex flex-col'>
                <p>Playlist</p>
                <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{playlistData.name}</h2>
                <h4>{playlistData.desc}</h4>
                <p className='mt-1'>
                    <img className='inline-block w-40' src={assets.logo} alt="" />
                    <b>Famo musique</b>
                    - 1 222 004 likes
                    - <b>50 musiques, </b>
                    environs 2h 20min
                </p>
            </div>
        </div>
        <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
            <p><b className='mr-4' >#</b> Titre</p>
            <p className='hidden sm:block'> Date d'ajout</p>
            <img className='m-auto w-4' src={assets.clock_icon} alt="" />
        </div>
        <hr />
        {
            songsData.map((item, index)=>(
                <div onClick={()=>playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff26] cursor-pointer'>
                    <p className='text-white'>
                        <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                        <img className='inline w-10 mr-5' src={item.image} alt="" />
                        {item.name}
                    </p>
                    <p className='text-[15px] hidden sm:block'>il a 4 jours</p>
                    <p className='text-[15px] text-center'>{item.duration}</p>
                </div>
            ))
        }
    </>
  )
}

export default DisplayPlaylist