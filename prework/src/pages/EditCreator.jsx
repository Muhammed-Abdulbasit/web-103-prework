import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../client"; // Adjust path if needed

export default function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState({
    name: "",
    url: "",
    description: "",
    image: ""
  });

  // Fetch creator info on load
  useEffect(() => {
    async function fetchCreator() {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching creator:", error);
      } else {
        setCreator(data);
      }
    }

    fetchCreator();
  }, [id]);

  // Update creator in database
  async function handleUpdate(e) {
    e.preventDefault();
    const { error } = await supabase
      .from("creators")
      .update({
        name: creator.name,
        url: creator.url,
        description: creator.description,
        image: creator.image
      })
      .eq("id", id);

    if (error) {
      console.error("Error updating creator:", error);
    } else {
      navigate(`/creator/${id}`); // Redirect to ViewCreator page
    }
  }

  // Delete creator in database
  async function handleDelete() {
    const { error } = await supabase
      .from("creators")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting creator:", error);
    } else {
      navigate("/"); // Redirect to home after delete
    }
  }

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2>Edit Creator</h2>
      <form onSubmit={handleUpdate}>
        <label>Name:</label>
        <input
          type="text"
          value={creator.name}
          onChange={(e) => setCreator({ ...creator, name: e.target.value })}
          required
        />

        <label>URL:</label>
        <input
          type="text"
          value={creator.url}
          onChange={(e) => setCreator({ ...creator, url: e.target.value })}
          required
        />

        <label>Description:</label>
        <textarea
          value={creator.description}
          onChange={(e) => setCreator({ ...creator, description: e.target.value })}
        />

        <label>Image URL:</label>
        <input
          type="text"
          value={creator.image}
          onChange={(e) => setCreator({ ...creator, image: e.target.value })}
        />

        <button type="submit" style={{ marginTop: "10px" }}>
          Update Creator
        </button>
      </form>

      {/* Delete button */}
      <button
        onClick={handleDelete}
        style={{
          marginTop: "20px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          padding: "8px 12px",
          cursor: "pointer"
        }}
      >
        Delete Creator
      </button>
    </div>
  );
}
