import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators"; // homepage
import AddCreator from "./pages/AddCreator";   // add new creator
import ViewCreator from "./pages/ViewCreator"; // view single creator
import EditCreator from "./pages/EditCreator"; // edit creator
import './App.css'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="/new" element={<AddCreator />} />
        <Route path="/creator/:id" element={<ViewCreator />} />
        <Route path="/edit/:id" element={<EditCreator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
