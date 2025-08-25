import React, { useEffect, useState } from "react";
import supabase from "../client";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function ShowCreator() {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCreators() {
      const { data, error } = await supabase.from("creators").select("*");
      if (error) {
        console.error("Error fetching creators:", error);
        setCreators([]);
      } else {
        setCreators(data);
      }
      setLoading(false);
    }
    fetchCreators();
  }, []);

  return (
    <div>
      <h1>Creatorverse</h1>
      <Link to="/new">
        <button>Add New Creator</button>
      </Link>

      {loading ? (
        <p>Loading creators...</p>
      ) : creators.length === 0 ? (
        <p>No content creators found.</p>
      ) : (
        creators.map((creator) => <Card key={creator.id} creator={creator} />)
      )}
    </div>
  );
}
