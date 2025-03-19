import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormNewContact from '../components/FormNewContact';

function NewContactPage() {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState(null);

  // Manejar la creación exitosa de un contacto
  const handleContactCreated = (newContact) => {
    console.log('Contacto creado:', newContact);
    
    // Mostrar mensaje de éxito
    setSuccessMessage(`¡El contacto ${newContact.fullname} ha sido creado exitosamente!`);
    
    // Redirigir a la página principal después de 2 segundos
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  // Manejar cancelación del formulario
  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div className="max-w-2xl mx-auto mt-16 p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Nuevo Contacto</h1>
      
      {/* Mostrar mensaje de éxito si existe */}
      {successMessage && (
        <div className="bg-green-50 border-l-4 border-green-500 text-green-700 p-4 rounded-md mb-6">
          {successMessage}
          <p className="text-sm mt-1">Serás redirigido a la lista de contactos en unos segundos...</p>
        </div>
      )}
      
      {/* Mostrar el formulario si no hay mensaje de éxito */}
      {!successMessage && (
        <div className="bg-white border-2 border-orange-200 rounded-lg shadow-sm p-6 mb-8">
          <p className="text-gray-600 mb-6">
            Completa el formulario para añadir un nuevo contacto a tu lista.
          </p>
          
          <FormNewContact 
            onContactCreated={handleContactCreated}
            onCancel={handleCancel}
          />
        </div>
      )}
    </div>
  );
}

export default NewContactPage;