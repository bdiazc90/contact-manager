import ContactRow from './ContactRow';

const ContactList = ({ contacts, onContactClick }) => {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-indigo-600">Mis Contactos</h2>
            <ul className="divide-y divide-gray-200">
                {contacts.map((contact, index) => (
                    <ContactRow 
                        key={index} 
                        contact={contact}
                        onClick={() => onContactClick(contact)}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ContactList;