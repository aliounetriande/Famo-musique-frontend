import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ currentUser, logout }) => {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#121212" }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "15px", color: "white" }}>
        <li>
        <Link className="link" to="/">
            Accueil
          </Link>
          <Link className="link" to="/">
            Accueil
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            À propos
          </Link>
        </li>
        
        {/* Affiche le prénom de l'utilisateur ou un texte par défaut */}
        {currentUser ? (
          <>
            <li>
              <span>{currentUser.firstname}</span> {/* Affiche le prénom de l'utilisateur */}
            </li>
            <li>
              <span 
                onClick={logout} 
                style={{ cursor: "pointer", color: "lightgray" }}>
                Se déconnecter
              </span>
            </li>
          </>
        ) : (
          <li>
            <Link className="link" to="/login">
              Se connecter
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
