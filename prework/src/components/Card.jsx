import React from "react";
import { Link } from "react-router-dom";

export default function Card({ creator }) {
  return (
    <div className="card">
      <img
        src={creator.image_url || "https://via.placeholder.com/200"}
        alt={creator.name}
        style={{ width: "200px", borderRadius: "8px" }}
      />
      <h2>{creator.name}</h2>
      <a href={creator.url} target="_blank" rel="noopener noreferrer">
        {creator.url}
      </a>
      <p>{creator.description}</p>

      <div style={{ marginTop: "10px" }}>
        <Link to={`/creator/${creator.id}`}>
          <button style={{ marginRight: "8px" }}>View</button>
        </Link>
        <Link to={`/edit/${creator.id}`}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
}
