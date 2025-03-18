import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./routes/Layout";
import ContactListPage from "./routes/ContactListPage";
import ContactDetailPage from "./routes/ContactDetailPage";
import ContactByTypePage from "./routes/ContactByTypePage";
import NewContactPage from "./routes/NewContactPage";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					{/* Ruta principal - mostrará la lista de todos los contactos */}
					<Route index element={<ContactListPage />} />
					
					{/* Rutas anidadas para contactos */}
					<Route path="contacts">
						{/* Lista general de contactos */}
						<Route index element={<ContactListPage />} />
						
						{/* Ruta dinámica para ver detalles de un contacto específico */}
						<Route path=":id" element={<ContactDetailPage />} />
						
						{/* Rutas anidadas para filtrar por tipo */}
						<Route path="type">
							<Route path=":type" element={<ContactByTypePage />} />
						</Route>
					</Route>
					
					{/* Ruta para crear un nuevo contacto */}
					<Route path="new" element={<NewContactPage />} />
					
					{/* Ruta para manejar cualquier otra URL no definida */}
					<Route path="*" element={
						<div className="flex items-center justify-center h-96">
							<div className="text-center">
								<h2 className="text-2xl font-bold text-gray-800 mb-2">Página no encontrada</h2>
								<p className="text-gray-600">La página que buscas no existe.</p>
							</div>
						</div>
					} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}