import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import PlayerContextProvider from './context/PlayerContext.jsx'
import { AuthContextProvider } from './context/authContext'  // Import du AuthContextProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PlayerContextProvider>
        <AuthContextProvider>  {/* Ajout du AuthContextProvider ici */}
          <App />
        </AuthContextProvider>
      </PlayerContextProvider>
    </BrowserRouter>
  </StrictMode>
)
