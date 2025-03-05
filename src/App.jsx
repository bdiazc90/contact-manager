import { useState } from 'react';


// App devuelve JSX. ✅
// App empieza con letra mayúscula ✅
// Con estas 2 condiciones, REACT considera a App un componente.
export default function App() {
	return (
		<main>
			<h1>App State y Props</h1>
            <Contador />
		</main>
	);
}


// Componente Hijo
function Contador() {

    const [contador, setContador] = useState(1);
    const [mensaje, setMensaje] = useState("Hola a todos");

    function aumentar() {
        // contador = contador + 1;
        setContador(1000);
        console.log('contando: ' + contador);
        setMensaje("Chau a todos");
    }

    return (
        <>
        <h2>Contando: {contador}</h2>
        <h2>{mensaje}</h2>
        <button onClick={aumentar}>+</button>
        </>
    )
}