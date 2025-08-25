import React, { useState } from "react";
import supabase from "../client";
import { useNavigate } from "react-router-dom";

export default function AddCreator() {
  const navigate = useNavigate();
  const [creator, setCreator] = useState({
    name: "",
    url: "",
    description: "",
    image_url: ""
  });

  const handleChange = (e) => {
    setCreator({ ...creator, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("creators").insert([creator]);
    if (error) {
      console.error("Error adding creator:", error);
    } else {
      navigate("/"); // redirect to home
    }
  };

  return (
    <div>
      <h2>Add a New Creator</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={creator.name} onChange={handleChange} required />
        <input name="url" placeholder="URL" value={creator.url} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={creator.description} onChange={handleChange} required />
        <input name="image_url" placeholder="Image URL (optional)" value={creator.image_url} onChange={handleChange} />
        <button type="submit">Add Creator</button>
      </form>
    </div>
  );
}
