import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "./components/Layout";
import Tabela from "./components/Tabela";
import Cliente from "@/core/Cliente";
import Botao from "./components/Botao";
import Formulario from "./components/Formulario";
import { useEffect, useState } from "react";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import ColecaoCliente from "@/backend/db/ColecaoCliente";
import useClientes from "@/hooks/useClientes";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const {
    cliente, 
    clientes,
    tabelaVisivel,
    exibirTabela,
    clienteSelecionado, 
    clienteExcluido, 
    salvarCliente, 
    novoCliente 
  } = useClientes();

  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-r
    from-blue-500 to-purple-500 text-white`}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4" onClick={() => novoCliente()}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido}></Tabela>
          </>
        ) : (
          <Formulario cliente={cliente} cancelado={exibirTabela} clienteMudou={salvarCliente}></Formulario>
        )}

      </Layout>
    </div>
  );
}
