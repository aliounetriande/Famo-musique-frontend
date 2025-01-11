import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user")) || null
  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem("user")
    navigate("/")
  }
  return (
    <nav style={{ padding: "10px", backgroundColor: "#121212" }}>
      <ul style={{
        listStyle: "none",
        display: "flex",
        gap: "15px",
        color: "white",
        justifyContent: "space-between"
      }}>
        <div style={{
          display: "flex",
          gap: "10px"
        }}>
          <li>
            <Link className="link" to="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              À propos
            </Link>
          </li>
        </div>

        {/* Affiche le prénom de l'utilisateur ou un texte par défaut */}
        {user ? (
          <div style={{
            display: "flex",
            gap: "10px"
          }}>
            <li>
              <span style={{
                display: "flex",
                gap: "10px",
                background: "#00f",
                padding: "5px",
                borderRadius: "10px",
                cursor: "pointer"
              }}>{user.firstname}</span> {/* Affiche le prénom de l'utilisateur */}
            </li>
            <li>
              <span
                onClick={logout}
                style={{ cursor: "pointer", color: "lightgray" }}>
                Se déconnecter
              </span>
            </li>
          </div>
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
