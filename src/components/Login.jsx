import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { AuthContext } from '../context/authContext';

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",  // Changement de 'username' à 'email'
    password: "",
  });
  const [err, setError] = useState(null);

  const navigate = useNavigate()

  const { login } = useContext(AuthContext);

  const handleChange = e => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      // Connexion avec l'email et le mot de passe
      await login(inputs)
      navigate("/")
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="auth flex items-center justify-center h-screen bg-gray-900">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Se connecter</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"  // Changement du type de champ à 'email'
            placeholder="Email"
            name="email"  // Changement de 'username' à 'email'
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            name="password"
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Se connecter
          </button>
          {err && <p className="text-red-500 text-center mt-2">{err?.error || 'Une erreur s\'est produite'}</p>}

          <span className="block text-center text-gray-600">
            Vous n'êtes pas inscrit ?{" "}
            <Link to="/sign-up" className="text-blue-500 hover:underline">
              S'inscrire
            </Link>
          </span>
        </form>
      </div>
    </div>
  )
}

export default Login;
