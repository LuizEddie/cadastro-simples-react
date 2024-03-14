import ColecaoCliente from "@/backend/db/ColecaoCliente";
import Cliente from "@/core/Cliente";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import { useEffect, useState } from "react";
import useTabelaForm from "./useTabelaForm";

export default function useClientes(){
    const repo: ClienteRepositorio = new ColecaoCliente();

    
    const { tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario } = useTabelaForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
    const [clientes, setClientes] = useState<Cliente[]>([]);
  
    useEffect(
      obterTodos
    , []);
  
    function clienteSelecionado(cliente: Cliente) {
      setCliente(cliente);
      exibirFormulario();
    }
  
    async function clienteExcluido(cliente: Cliente) {
      await repo.excluir(cliente);
      obterTodos();
    }
  
    function obterTodos(){
        repo.obterTodos().then((clientes)=>{
            setClientes(clientes);
            exibirTabela();
        })
    }
  
    async function salvarCliente(cliente: Cliente){
      await repo.salvar(cliente);
      obterTodos();
    }
  
    function novoCliente(){
      setCliente(Cliente.vazio());
      exibirFormulario();
    }

    return {
        cliente,
        clientes,
        tabelaVisivel,
        formularioVisivel,
        exibirTabela,
        salvarCliente,
        novoCliente,
        clienteExcluido,
        clienteSelecionado,
        obterTodos,
    }
  
}