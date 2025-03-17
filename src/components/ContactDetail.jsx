import { getTypeIcon } from "../libs/utils";

export default function ContactDetail({ contact }) {
    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-600">Contacto Destacado</h2>
            <div className="bg-gray-50 rounded-md p-4 border border-gray-200">
                <h3 className="font-medium text-lg mb-3 flex items-center">
                    <span className="text-2xl mr-2">{getTypeIcon(contact.type)}</span>
                    {contact.fullname}
                </h3>
                <p className="mb-2 text-gray-700">📱 {contact.phonenumber}</p>
                <p className="text-gray-700">📧 {contact.email}</p>
            </div>
        </div>
    );
}