import { getTypeIcon } from "../libs/utils";

const ContactRow = ({ contact, onClick }) => {
    const { fullname, phonenumber, email, type } = contact;

    return (
        <li 
            className="py-3 hover:bg-indigo-50 transition cursor-pointer flex items-center"
            onClick={onClick}
        >
            <span className="text-2xl mr-3">{getTypeIcon(type)}</span>
            <div className="flex flex-col">
                <span className="font-medium text-gray-800">{fullname}</span>
                <div className="flex gap-4 text-sm text-gray-600">
                    <span>{phonenumber}</span>
                    <span>{email}</span>
                </div>
            </div>
        </li>
    );
};

export default ContactRow;