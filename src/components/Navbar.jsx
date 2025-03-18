import { NavLink } from "react-router-dom";

export default function Navbar() {
    // Función para aplicar estilos a los enlaces activos
    const getNavLinkClass = ({ isActive }) => {
        return isActive 
            ? "text-indigo-800 font-semibold border-b-2 border-indigo-600" 
            : "text-indigo-600 hover:text-indigo-800 transition";
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
            <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
                <NavLink to="/" className="text-xl font-bold text-gray-800 hover:text-indigo-600 transition">
                    Contact Manager
                </NavLink>
                
                <nav>
                    <ul className="flex gap-6">
                        <li>
                            <NavLink to="/contacts" className={getNavLinkClass} end>
                                Todos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts/type/familia" className={getNavLinkClass}>
                                Familia
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts/type/trabajo" className={getNavLinkClass}>
                                Trabajo
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacts/type/social" className={getNavLinkClass}>
                                Social
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/new" className={getNavLinkClass}>
                                Nuevo
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}