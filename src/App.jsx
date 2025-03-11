import { useState } from "react";

// App devuelve JSX. ✅
// App empieza con letra mayúscula ✅
// Con estas 2 condiciones, REACT considera a App un componente.
export default function App() {
	return (
		<main>
			<h1>App State y Props</h1>
			<Contactos />
		</main>
	);
}

function Contactos() {
	const [contactos, setContactos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	async function getContactos() {
		try {
			setIsLoading(true);
			const response = await fetch("https://enter-mockapi.vercel.app/api/contacts"); // fetch() -> es una Promesa.
			console.log(response);
			// Si la promera es exitosa, haces esto:
			const data = await response.json();
			setContactos(data);
		} catch (error) {
			// Si la promesa falla, haces esto:
			console.log("Error al obtener contactos", error);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<section>
			<h2>Contactos</h2>
			<button onClick={getContactos}>Traer Contactos</button>
			{isLoading ? (
				<p>Cargando...</p>
			) : (
				<ul>
					{contactos.map((contacto, index) => (
						<li key={index}>
							<div>
								<h3>{contacto.fullname}</h3>
								<p>{contacto.email}</p>
								<p>{contacto.phonenumber}</p>
								<p>{contacto.type}</p>
							</div>
						</li>
					))}
				</ul>
			)}
		</section>
	);
}
