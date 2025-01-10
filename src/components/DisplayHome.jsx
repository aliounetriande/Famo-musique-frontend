import React from 'react'
import Navbar from './Navbar'
import {playlistsData} from '../assets/assets'
import {songsData} from '../assets/assets'
import PlaylistItem from './PlaylistItem'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
       
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>A ne pas manquer</h1>
            <div className='flex overflow-auto'>
                {playlistsData.map((item, index)=>(<PlaylistItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
            </div>
        </div>
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Tendances actuelles</h1>
            <div className='flex overflow-auto'>
                {songsData.map((item, index)=>(<SongItem key={index} name={item.name} singer={item.singer} id={item.id} image={item.image}/>))}
            </div>
        </div>
    </>
  )
}

export default DisplayHome