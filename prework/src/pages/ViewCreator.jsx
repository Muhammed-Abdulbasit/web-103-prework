import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../client";
import Card from "../components/Card";
import '../App.css'; 

export default function ViewCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCreator() {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();
      if (error) console.error("Error fetching creator:", error);
      else setCreator(data);
      setLoading(false);
    }
    fetchCreator();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!creator) return <p>Creator not found.</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <button
        onClick={() => navigate("/")}  // navigate back to ShowCreator page
        style={{ marginBottom: "20px" }}
      >
        &larr; Back
      </button>

      <Card creator={creator} />

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => navigate(`/edit/${creator.id}`)}>Edit Creator</button>
      </div>
    </div>
  );
}
