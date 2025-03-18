import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getTypeIcon } from "../libs/utils";

export default function ContactDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [contact, setContact] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadContact() {
            try {
                setIsLoading(true);
                setError(null);
                
                const response = await fetch("https://enter-mockapi.vercel.app/api/contacts");
                
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }
                
                const data = await response.json();
                
                if (data[id]) {
                    setContact(data[id]);
                } else {
                    setError("Contacto no encontrado");
                }
            } catch (error) {
                console.error("Error al cargar el contacto:", error);
                setError("No pudimos cargar la información del contacto");
            } finally {
                setIsLoading(false);
            }
        }
        
        loadContact();
    }, [id]);
    
    function handleGoBack() {
        navigate(-1);
    }

    if (isLoading) {
        return (
            <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md">
                Cargando información del contacto...
            </div>
        );
    }

    if (error) {
        return (
            <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-md">
                    {error}
                </div>
                <button 
                    onClick={handleGoBack}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md transition flex items-center"
                >
                    <span className="mr-1">←</span> Volver
                </button>
            </div>
        );
    }

    if (!contact) {
        return (
            <div className="space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md">
                    No se encontró el contacto con ID: {id}
                </div>
                <button 
                    onClick={handleGoBack}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md transition flex items-center"
                >
                    <span className="mr-1">←</span> Volver
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">Detalles del Contacto</h1>
                <button 
                    onClick={handleGoBack}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md transition flex items-center"
                >
                    <span className="mr-1">←</span> Volver
                </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">{getTypeIcon(contact.type)}</span>
                    <h2 className="text-2xl font-bold text-gray-800">{contact.fullname}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-md">
                            <h3 className="text-sm font-medium text-gray-500 mb-1">Teléfono</h3>
                            <p className="text-lg font-medium">{contact.phonenumber}</p>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-md">
                            <h3 className="text-sm font-medium text-gray-500 mb-1">Email</h3>
                            <p className="text-lg font-medium">{contact.email}</p>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-md">
                            <h3 className="text-sm font-medium text-gray-500 mb-1">Tipo</h3>
                            <p className="text-lg font-medium capitalize">{contact.type}</p>
                        </div>
                        
                        <div className="bg-indigo-50 p-4 rounded-md">
                            <h3 className="text-sm font-medium text-indigo-700 mb-1">Identificador</h3>
                            <p className="text-lg font-medium">#{id}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}