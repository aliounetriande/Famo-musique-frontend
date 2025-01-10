import React from 'react'
import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from "axios"
import Swal from 'sweetalert2'


const Register = () => {
  const [inputs, setInputs] = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
  });
  const [err, setError] = useState(null);
//hzhzhzhz
  const navigate = useNavigate()

const handleChange = e =>{
  setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
}

const handleSubmit = async e => {
  e.preventDefault();
  try {
    await axios.post("http://localhost:5000/user/sign-up", inputs);
    navigate("/login");
    Swal.fire({
      title: "Compte créé!",
      text: "Votre compte a été créé avec succès.",
      icon: "success"
    });
  } catch (err) {
    const errorMessage = err.response ? err.response.data : "Erreur inconnue";
    setError(errorMessage);
  }
};

  return (
    <div className="auth flex items-center justify-center h-screen bg-gray-900">
  <div className="bg-white p-8 rounded-lg shadow-lg w-96">
    <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">S'inscrire</h1>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        required
        type="text"
        placeholder="Prénom"
        name="firstname"
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      />
      <input
        required
        type="text"
        placeholder="Nom"
        name="lastname"
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      />
      <input
        required
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      />
      <input
        required
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
        S'inscrire
      </button>
      {err && <p className="text-red-500 text-center mt-2">{err}</p>}
      <span className="block text-center text-gray-600">
        Vous êtes déjà inscrit ?{" "}
        <Link to="/login" className="text-blue-500 hover:underline">
          Se connecter
        </Link>
      </span>
    </form>
  </div>
</div>

  )
}

export default Register