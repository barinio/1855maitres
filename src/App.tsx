import { Route, Routes } from "react-router-dom";

import Accueil from "@/pages/Accueil/Accueil";
import APropos from "@/pages/APropos/APropos";
import Blogue from "@/pages/Blogue/Blogue";
import Contact from "@/pages/Contact";
import CardDetail from "@/components/CardBlog/CardDetail";

function App() {
  return (
    <Routes>
      <Route element={<Accueil />} path="/" />
      <Route element={<APropos />} path="/a-propos" />
      <Route element={<Blogue />} path="/blogue" />
      <Route element={<CardDetail />} path="/blogue/:id" />
      <Route element={<Contact />} path="/contact" />
    </Routes>
  );
}

export default App;
