import axios from "axios";
import { useState } from "react";
import { getToken, getUserId } from "../utils/auth";


const CreatePlaylist = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
        const token = getToken()
        const user = getUserId()
        const res = await axios.post("http://localhost:5000/playlist/create", {
            name: name,
            desc: description,
            image: ''
        }, {
            headers: { Authorization: token, userId: user }
        });
        console.log('====================================');
        console.log(res);
        console.log('====================================');
    } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }
    setName("");
    setDescription("");
  };

  return (
    <div className="create-playlist max-w-md mx-auto p-4 border rounded-md shadow-md bg-white">
      <h2 className="text-lg font-bold mb-4">Créer une playlist</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nom de la playlist <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Entrez le nom de la playlist"
            className="mt-1 block w-full p-2 border text-black border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Ajoutez une description"
            className="mt-1 block w-full text-black p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Créer
        </button>
      </form>
    </div>
  );
};

export default CreatePlaylist;
