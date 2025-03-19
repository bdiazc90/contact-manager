import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import NewContactPage from "./pages/NewContactPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="max-w-screen-xl mx-auto">
        <Header />
        
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<HomePage />} />
          
          {/* Ruta para nuevo contacto */}
          <Route path="/nuevo" element={<NewContactPage />} />
          
          {/* Ruta para manejar cualquier otra URL no definida */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}