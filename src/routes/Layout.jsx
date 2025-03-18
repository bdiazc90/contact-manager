import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Layout() {
    return (
        <div className="max-w-screen-xl mx-auto">
            <Navbar />
            
            <div className="p-4 mt-16">
                {/* Outlet renderizará los componentes de las rutas anidadas */}
                <Outlet />
            </div>
        </div>
    );
}