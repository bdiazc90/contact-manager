import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTypeIcon } from "../libs/utils";

export default function ContactListPage() {
    const [contactos, setContactos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Cargar contactos automáticamente al montar el componente
        fetchContactos();
    }, []);

    async function fetchContactos() {
        try {
            setIsLoading(true);
            setError(null);
            
            const response = await fetch("https://enter-mockapi.vercel.app/api/contacts");
            
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            
            const data = await response.json();
            setContactos(data);
        } catch (error) {
            console.error("Error al obtener contactos:", error);
            setError("No pudimos cargar tus contactos. Por favor, intenta nuevamente más tarde.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Mis Contactos</h1>
            
            <div className="mb-6">
                <button 
                    onClick={fetchContactos} 
                    disabled={isLoading}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md font-medium transition disabled:bg-indigo-300 disabled:cursor-not-allowed"
                >
                    {isLoading ? "Actualizando..." : "Actualizar Contactos"}
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
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                    <ul className="divide-y divide-gray-200">
                        {contactos.map((contacto, index) => (
                            <li 
                                key={index}
                                className="py-3 hover:bg-indigo-50 transition cursor-pointer"
                            >
                                <Link 
                                    to={`/contacts/${index}`} 
                                    className="flex items-center"
                                >
                                    <span className="text-2xl mr-3">{getTypeIcon(contacto.type)}</span>
                                    <div className="flex flex-col">
                                        <span className="font-medium text-gray-800">{contacto.fullname}</span>
                                        <div className="flex gap-4 text-sm text-gray-600">
                                            <span>{contacto.phonenumber}</span>
                                            <span>{contacto.email}</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            
            {!isLoading && !error && contactos.length === 0 && (
                <div className="bg-gray-50 p-4 rounded-md text-gray-600 text-center">
                    No hay contactos para mostrar. Haz clic en "Actualizar Contactos" para comenzar.
                </div>
            )}
        </div>
    );
}