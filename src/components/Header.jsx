export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-10">
            <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-gray-800">Contact Manager</h1>
                <nav>
                    <ul className="flex gap-6">
                        <li><a href="#contactos" className="text-indigo-600 font-medium hover:text-indigo-800 transition">Contactos</a></li>
                        <li><a href="#favoritos" className="text-indigo-600 font-medium hover:text-indigo-800 transition">Favoritos</a></li>
                        <li><a href="#nuevo" className="text-indigo-600 font-medium hover:text-indigo-800 transition">Nuevo</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}