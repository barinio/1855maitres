import { Navigate, Route, Routes } from "react-router-dom";

import Accueil from "@/pages/Accueil/Accueil";
import APropos from "@/pages/APropos/APropos";
import Blogue from "@/pages/Blogue/Blogue";
import Contact from "@/pages/Contact";

function App() {
  return (
    <Routes>
      <Route element={<Accueil />} path="/" />
      <Route element={<APropos />} path="/a-propos" />
      <Route element={<PrivacyInformation />} path="/privacy-information" />
      <Route element={<PrivacyPolicy />} path="/privacy-policy" />
      <Route element={<Blogue />} path="/blogue" />
      <Route element={<CardDetail />} path="/blogue/:id" />
      <Route element={<Contact />} path="/contact" />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
