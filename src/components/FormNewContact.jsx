import { useState } from 'react';
import { createContact } from '../services/contactsApi';

function FormNewContact({ onContactCreated, onCancel }) {
  const [formData, setFormData] = useState({
    fullname: '',
    phonenumber: '',
    email: '',
    type: 'social'
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejar envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setIsLoading(true);
      setError(null);
      
      // Validar datos básicos
      if (!formData.fullname || !formData.phonenumber || !formData.email) {
        throw new Error('Por favor completa todos los campos requeridos');
      }
      
      // Llamar al servicio de API para crear el contacto
      const newContact = await createContact(formData);
      
      // Notificar al componente padre que se creó el contacto
      onContactCreated(newContact);
      
      // Resetear formulario
      setFormData({
        fullname: '',
        phonenumber: '',
        email: '',
        type: 'social'
      });
      
    } catch (error) {
      console.error('Error al crear contacto:', error);
      setError(error.message || 'Error al crear el contacto. Inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Mostrar mensaje de error si existe */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-md">
          {error}
        </div>
      )}
      
      {/* Campo: Nombre completo */}
      <div>
        <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre completo *
        </label>
        <input
          type="text"
          id="fullname"
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Juan Pérez"
        />
      </div>
      
      {/* Campo: Número de teléfono */}
      <div>
        <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-700 mb-1">
          Número de teléfono *
        </label>
        <input
          type="tel"
          id="phonenumber"
          name="phonenumber"
          value={formData.phonenumber}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="+51 987654321"
        />
      </div>
      
      {/* Campo: Correo electrónico */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Correo electrónico *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="juan.perez@ejemplo.com"
        />
      </div>
      
      {/* Campo: Tipo de contacto */}
      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
          Tipo de contacto
        </label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="familia">Familia</option>
          <option value="trabajo">Trabajo</option>
          <option value="social">Social</option>
        </select>
      </div>
      
      {/* Botones de acción */}
      <div className="flex justify-end space-x-4 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition"
          disabled={isLoading}
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition disabled:bg-indigo-300 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? 'Guardando...' : 'Guardar Contacto'}
        </button>
      </div>
    </form>
  );
}

export default FormNewContact;