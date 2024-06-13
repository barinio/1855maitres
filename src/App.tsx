import { Route, Routes } from "react-router-dom";

import Accueil from "@/pages/Accueil";
import APropos from "@/pages/APropos";
import Blogue from "@/pages/Blogue";
import Contact from "@/pages/Contact";

function App() {
  return (
    <Routes>
      <Route element={<Accueil />} path="/" />
      <Route element={<APropos />} path="/a-propos" />
      <Route element={<Blogue />} path="/blogue" />
      <Route element={<Contact />} path="/contact" />
    </Routes>
  );
}

export default App;
