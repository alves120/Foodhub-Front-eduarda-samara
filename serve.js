"use client"

import { Main } from "next/document";
import {useState} from "react"
export default function Home(){
    const [nome,setNome] =useState("");
    const [preco,setPreco] =useState("");
    const [estoque,setEstoque] =useState("");
 
   function cadastrarDelivery(){
    console.log("Nome",nome);
    console.log("Preço",preco);
    console.log("Estoque",estoque);

 }
 return (
  <main className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

      <h1 className="text-2xl font-bold text-center mb-6">
        Cadastrar lanche
      </h1>

      <div className="mb-4">
        <label className="block font-medium mb-2">
          Nome do lanche
        </label>

        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite nome do lanche"
          className="w-full border rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-2">
          Preço
        </label>

        <input
          type="number"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          placeholder="Digite o preço"
          className="w-full border rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-2">
          Estoque
        </label>

        <input
          type="number"
          value={estoque}
          onChange={(e) => setEstoque(e.target.value)}
          placeholder="Digite o estoque"
          className="w-full border rounded-md p-2"
        />
      </div>

      <button
        onClick={cadastrarlanche}
        className="w-full bg-black text-white p-2 rounded-md"
      >
        Cadastrar
      </button>

    </div>
  </main>
);
}
