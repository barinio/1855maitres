import { Navigate, Route, Routes } from "react-router-dom";

import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import Blogue from "@/pages/Blogue/Blogue";
import Contact from "@/pages/Contact";
import CardDetail from "@/components/CardBlog/CardDetail";
import PrivacyInformation from "@/pages/PrivacyInformation";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import ThankYou from "@/pages/ThankYou/ThankYou";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="/about" />
      <Route element={<PrivacyInformation />} path="/privacy-information" />
      <Route element={<PrivacyPolicy />} path="/privacy-policy" />
      <Route element={<Blogue />} path="/blogue" />
      <Route element={<CardDetail />} path="/blogue/:id" />
      <Route element={<Contact />} path="/contact" />
      <Route element={<ThankYou />} path="/thank-you" />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
