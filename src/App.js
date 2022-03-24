import { ThemeProvider } from "styled-components";
import tema from "./tema";
import { Inicial, Resultado } from "./pages";
import {  useState } from "react";
import { sortear } from "./services/SorteioService";
import Rodape from "./components/Rodape";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

function App() {

  const [resultado, setResultado] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [elementos, setElementos] = useState([]);
  const [categoriaNova, setCategoriaNova] = useState("");
  const [elementoNovo, setElementoNovo] = useState("");
  const [grupos, setGrupos] = useState("");
  const [elementoAlterado, setElementoAlterado] = useState("");
  const [erro, setErro] = useState({ existe: false, mensagem: ""} );
  const [explicacaoAberta, setExplicacaoAberta] = useState(true);
  
  function handleElementoNovo(evento) {
    setElementoNovo(evento.target.value);
  }

  function handleCategoriaNova(evento) {
    setCategoriaNova(evento.target.value);
  }

  function elementoExiste(elementoDigitado) {
    let elementosAdicionados = [];
    elementos.forEach((elemento) => {
      elementosAdicionados.push(elemento.nome);
    });
    if (elementosAdicionados.includes(elementoDigitado)) {
      setErro({
        existe: true,
        mensagem: 'Esta aplicação não permite dois elementos com o mesmo nome!!!'
      });
      return true;
    } else {
      return false;
    }
  }

  function fecharErro() {
    setErro({ existe: false, mensagem: '' });
  }

  function adicionarNovo() {
    setElementoNovo(elementoNovo + " ");
    setCategoriaNova(categoriaNova + " ");
  }

  function incrementarElementos() {
    let novaListaElementos = elementos;
    novaListaElementos.push({chave: elementos.length, nome: elementoNovo, categoria: categoriaNova});
    setElementos(novaListaElementos);
  }

  function atualizarCategorias(todosElementos) {
    let nomesCategorias = [];
    todosElementos.forEach((elemento) => {
      if (!nomesCategorias.includes(elemento.categoria)) {
        nomesCategorias.push(elemento.categoria);
      }
    });
    let categoriasAtualizadas = [];
    nomesCategorias.forEach((categoria, indice) => {
      let ocorrencias = 0;
      todosElementos.forEach((elemento) => {
        if (elemento.categoria === categoria) {
          ocorrencias++;
        }
      });
      categoriasAtualizadas.push({chave: indice, nome: categoria, ocorrencias: ocorrencias});
    });
    setCategorias(categoriasAtualizadas);
  }

  function limparNovosCampos() {
    setElementoNovo('');
    setCategoriaNova('');
  }

  function adicionarElemento(evento) {
    if (evento) {
      if (!elementoExiste(elementoNovo)) {
        adicionarNovo();
        incrementarElementos();
        atualizarCategorias(elementos);
        document.getElementById('elemento').focus();
        limparNovosCampos();
      }
    }
  }

  function selecionarCategoria(evento) {
    if (evento) {
      setCategoriaNova(evento.target.innerText);
    }
  }

  function removerElemento(evento) {
    if (evento) {
      let todosElementos = elementos.filter((elemento) => elemento.chave !== parseInt(evento.currentTarget.id));
      setElementos(todosElementos);
      atualizarCategorias(todosElementos);
    }
  }

  function handleGrupos(evento) {
    setGrupos(parseInt(evento.target.value));
  }

  function sendSortear() {
    let elementosSorteados = sortear(elementos, categorias, grupos);
    setElementos(elementosSorteados);
    setResultado(true);
  }

  function resetar(evento) {
    if (evento) {
      setResultado(false);
      setElementos([]);
      setCategorias([]);
      setGrupos('');
    }
  }

  function alterarElemento(evento) {
    if (evento) {
      if (!elementoExiste(evento.target.value)) {
        setElementoAlterado(evento.target.value);
        let elementosAlterado = elementos;
        let indice = evento.target.id.replace('elemento', '');
        elementosAlterado[indice].nome = evento.target.value;
        setElementos(elementosAlterado);
        console.log(elementoAlterado);
      }
    }
  }

  function alterarCategoria(evento) {
    if (evento) {
      let elementosAlterados = elementos;
      let indice = evento.target.id.replace('categoria', '');
      elementosAlterados[indice].categoria = evento.target.value;
      setElementos(elementosAlterados);
      atualizarCategorias(elementos);
    }
  }

  function fecharExplicacao(evento) {
    if (evento) {
      setExplicacaoAberta(false);
    }
  }

  return (
    <ThemeProvider theme={tema}>
      {
        resultado ? 
          <Resultado
            elementos={elementos}
            resetar={resetar}
          />
        : 
          <Inicial
            categorias={categorias}
            valor={'-'}
            elementos={elementos}
            obterElementoNovo={handleElementoNovo}
            obterCategoriaNova={handleCategoriaNova}
            adicionarElementoNovo={adicionarElemento}
            elementoNovo={elementoNovo}
            categoriaNova={categoriaNova}
            selecionarCategoria={selecionarCategoria}
            removerElemento={removerElemento}
            grupos={grupos}
            obterGrupos={handleGrupos}
            sortear={sendSortear}
            foco={true}
            resetar={resetar}
            alterarElemento={alterarElemento}
            alterarCategoria={alterarCategoria}
            erro={erro}
            fecharErro={fecharErro}
            explicacaoAberta={explicacaoAberta}
            fecharExplicacao={fecharExplicacao}
          />
      }
      <Rodape />
    </ThemeProvider>
  );
}

export default App;
