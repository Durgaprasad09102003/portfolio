import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import React from 'react';
import CustomCursor from "./components/CustomCursor/CustomCursor"; 
import HomePage from "./pages/HomePage/HomePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import AlbumPage from "./pages/AlbumPage/AlbumPage";

export default function App() {
  return (
    <Router basename="/portfolio">  {/* Add basename here */}
      <CustomCursor /> 
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/albums" element={<AlbumPage />} />
      </Routes>
    </Router>
  );
}