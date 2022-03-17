import { ThemeProvider } from "styled-components";
import tema from "./tema";
import { Inicial, Resultado } from "./pages";
import { useState } from "react";

function App() {

  const [resultado, setResultado] = useState(false);
  const [categorias, setCategorias] = useState([{chave: 1, nome: 'Europa'}, {chave: 2, nome: 'América do Sul'}, {chave: 3, nome: 'Ásia'}, {chave: 4, nome: 'África'}, {chave: 5, nome: 'América do Norte'}]);

  return (
    <ThemeProvider theme={tema}>
      {
        resultado ? <Resultado />
        : 
        <Inicial
          categorias={categorias}
          valor={'-'}
        />
      }
    </ThemeProvider>
  );
}

export default App;
