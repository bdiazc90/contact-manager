// URL base de la API
const API_URL = "https://entermocks.vercel.app/api";

/**
 * Obtiene todos los contactos
 * @returns {Promise<Array>} - Lista de contactos
 */
export async function getContacts() {
	try {
		const response = await fetch(`${API_URL}/contacts`);

		if (!response.ok) {
			throw new Error(`Error HTTP: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error("Error al obtener contactos:", error);
		throw error;
	}
}

/**
 * Obtiene un contacto por su ID
 * @param {number} id - ID del contacto
 * @returns {Promise<Object>} - Datos del contacto
 */
export async function getContactById(id) {
	try {
		const contacts = await getContacts();
		return contacts[id];
	} catch (error) {
		console.error(`Error al obtener contacto con ID ${id}:`, error);
		throw error;
	}
}

/**
 * Obtiene contactos filtrados por tipo
 * @param {string} type - Tipo de contacto (familia, trabajo, social)
 * @returns {Promise<Array>} - Lista de contactos filtrados
 */
export async function getContactsByType(type) {
	try {
		const contacts = await getContacts();
		return contacts.filter((contact) => contact.type === type);
	} catch (error) {
		console.error(`Error al obtener contactos de tipo ${type}:`, error);
		throw error;
	}
}

/**
 * Crea un nuevo contacto
 * @param {Object} contact - Datos del contacto a crear
 * @returns {Promise<Object>} - Contacto creado
 *
 * Nota: Esta es una simulación, ya que la API de prueba no permite POST reales
 */
export async function createContact(contact) {
	try {
		// Simulación de un POST a la API
		// En una API real, usaríamos:
		// const response = await fetch(`${API_URL}/contacts`, {
		//   method: 'POST',
		//   headers: {
		//     'Content-Type': 'application/json',
		//   },
		//   body: JSON.stringify(contact)
		// });

		// Simulamos una respuesta exitosa después de 500ms
		return new Promise((resolve) => {
			setTimeout(() => {
				// Añadir un ID simulado
				const newContact = {
					...contact,
					id: Date.now(), // Simulamos un ID único
				};
				resolve(newContact);
			}, 500);
		});
	} catch (error) {
		console.error("Error al crear contacto:", error);
		throw error;
	}
}
