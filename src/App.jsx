// src/App.jsx
import React, { useContext } from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Display from './components/Display';
import Navbar from './components/Navbar';
import { PlayerContext } from './context/PlayerContext';
import { AuthContextProvider } from './context/authContext'; // Import du AuthContext

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  
  if (!track || !track.file) {
    return <div>Error: Track data is missing!</div>;
  }

  return (
    <AuthContextProvider> {/* Fournir le contexte Auth à toute l'application */}
      <div className="h-screen bg-black">
        <div className="h-[90%] flex">
          <Sidebar className="w-[20%]" />
          <div className="h-full w-full flex flex-col">
            <Navbar /> {/* Navbar peut accéder à currentUser via le contexte */}
            <Display />
          </div>
        </div>
        <Player />
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </AuthContextProvider>
  );
};

export default App;
