import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Menu from "./pages/Menu";
import FoOldal from "./pages/FoOldal";
import Leiras from "./pages/Leiras";
import Regisztracio from "./pages/Regisztracio";

function App() {
  return (
    <div>
      <Menu />
      <main className="container mt-4">
        <Routes>
          <Route path="/" element={<FoOldal />} />
          <Route path="/leiras" element={<Leiras />} />
          <Route path="/regisztracio" element={<Regisztracio />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
