import { ThemeProvider } from "styled-components";
import tema from "./tema";
import { Inicial, Resultado } from "./pages";
import { useState } from "react";

function App() {

  const [resultado, setResultado] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [elementos, setElementos] = useState([]);

  return (
    <ThemeProvider theme={tema}>
      {
        resultado ? <Resultado />
        : 
        <Inicial
          categorias={categorias}
          valor={'-'}
          elementos={elementos}
        />
      }
    </ThemeProvider>
  );
}

export default App;
