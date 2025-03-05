import Button from "../components/Button";

export function CabeceraDeContactos() {
	return (
		<h2>Lista de Contactos</h2>
	);
}

function ContactoUnico(props) {
	return (
		<li>{props.texto} / {props.second} <Button label="Eliminar" /><Button label="Agregar" variant="primary" /></li>
	)
}

export function CuerpoDeContactos() {
	return (
		<ul>
			<ContactoUnico texto="Bruno Díaz" second="Cabanillas" edad={34} />
			<ContactoUnico texto="Diego Díaz" />
			<ContactoUnico texto="Renato Díaz" />
			<ContactoUnico texto="Mariana Díaz" />
			<ContactoUnico texto="Santiago Díaz" />
			<ContactoUnico texto="Luis Díaz" />
		</ul>
	);
}

export function PieDeContactos() {
    return (
        <p>Fin de la lista de contactos</p>
    )
}
