import { useState } from "react";
import ContactList from "../components/ContactList";
import ContactPinned from "../components/ContactPinned";
import { getContacts } from "../services/contactsApi";

export default function HomePage() {
  const [contactos, setContactos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [contactoDestacado, setContactoDestacado] = useState(null);

  async function fetchContactos() {
    try {
      setIsLoading(true);
      setError(null);
      
      // Utilizamos nuestro servicio de API
      const data = await getContacts();
      setContactos(data);
      
      // Establecer un contacto destacado por defecto (el primero)
      if (data.length > 0 && !contactoDestacado) {
        setContactoDestacado(data[0]);
      }
    } catch (error) {
      console.error("Error al obtener contactos:", error);
      setError("No pudimos cargar tus contactos. Por favor, intenta nuevamente más tarde.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleContactClick(contacto) {
    setContactoDestacado(contacto);
  }

return (
    <div className="flex flex-col md:flex-row gap-6 p-4 mt-16">
        <aside className="w-full md:w-64 lg:w-80">
            {contactoDestacado && (
                <div className="sticky top-16">
                    <ContactPinned contact={contactoDestacado} />
                </div>
            )}
        </aside>
        
        <main className="flex-1">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Administrador de Contactos</h1>
            
            <div className="mb-6">
                <button 
                    onClick={fetchContactos} 
                    disabled={isLoading}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md font-medium transition disabled:bg-indigo-300 disabled:cursor-not-allowed"
                >
                    {isLoading ? "Cargando..." : "Actualizar Contactos"}
                </button>
            </div>
            
            {isLoading && (
                <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md mb-4">
                    Cargando tus contactos...
                </div>
            )}
            
            {error && (
                <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-md mb-4">
                    {error}
                </div>
            )}
            
            {!isLoading && !error && contactos.length > 0 && (
                <ContactList 
                    contacts={contactos} 
                    onContactClick={handleContactClick}
                />
            )}
            
            {!isLoading && !error && contactos.length === 0 && (
                <div className="bg-gray-50 p-4 rounded-md text-gray-600 text-center">
                    No hay contactos para mostrar. Haz clic en "Actualizar Contactos" para comenzar.
                </div>
            )}
        </main>
    </div>
);
}