import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import NewContactPage from "./pages/NewContactPage";

export default function App() {
  return (
    <Router>
      <div className="max-w-screen-xl mx-auto">
        <Header />
        
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<HomePage />} />
          
          {/* Ruta para nuevo contacto */}
          <Route path="/nuevo" element={<NewContactPage />} />
          
          {/* Ruta para manejar cualquier otra URL no definida */}
          <Route path="*" element={
            <div className="flex items-center justify-center h-96 mt-16 p-4">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Página no encontrada</h2>
                <p className="text-gray-600">La página que buscas no existe.</p>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}