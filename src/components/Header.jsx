import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
            <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-gray-800 hover:text-indigo-600 transition">
                    Contact Manager
                </Link>
                <nav>
                    <ul className="flex gap-6">
                        <li>
                            <Link to="/" className="text-indigo-600 font-medium hover:text-indigo-800 transition">
                                Contactos
                            </Link>
                        </li>
                        <li>
                            <Link to="/nuevo" className="text-indigo-600 font-medium hover:text-indigo-800 transition">
                                Nuevo Contacto
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}