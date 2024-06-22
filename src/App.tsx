import { Navigate, Route, Routes } from "react-router-dom";

import Accueil from "@/pages/Accueil/Accueil";
import APropos from "@/pages/APropos";
import Blogue from "@/pages/Blogue";
import Contact from "@/pages/Contact";
import PrivacyInformation from "@/pages/PrivacyInformation";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

function App() {
  return (
    <Routes>
      <Route element={<Accueil />} path="/" />
      <Route element={<APropos />} path="/a-propos" />
      <Route element={<PrivacyInformation />} path="/privacy-information" />
      <Route element={<PrivacyPolicy />} path="/privacy-policy" />
      <Route element={<Blogue />} path="/blogue" />
      <Route element={<Contact />} path="/contact" />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
