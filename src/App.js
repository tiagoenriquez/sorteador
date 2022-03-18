import { ThemeProvider } from "styled-components";
import tema from "./tema";
import { Inicial, Resultado } from "./pages";
import { useState } from "react";

function App() {

  const [resultado, setResultado] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [elementos, setElementos] = useState([]);
  const [categoriaNova, setCategoriaNova] = useState("");
  const [elementoNovo, setElementoNovo] = useState("");
  
  function handleElementoNovo(evento) {
    setElementoNovo(evento.target.value);
  }

  function handleCategoriaNova(evento) {
    setCategoriaNova(evento.target.value);
  }

  return (
    <ThemeProvider theme={tema}>
      {
        resultado ? <Resultado />
        : 
        <Inicial
          categorias={categorias}
          valor={'-'}
          elementos={elementos}
          adicionarElementoNovo={handleElementoNovo}
          adicionarCategoriaNova={handleCategoriaNova}
          elementoNovo={elementoNovo}
          categoriaNova={categoriaNova}
        />
      }
    </ThemeProvider>
  );
}

export default App;
