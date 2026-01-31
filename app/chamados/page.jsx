import Image from "next/image";
import { User } from "lucide-react";
import { LogOutIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center bg-zinc-200 font-mono">
      {/* HEADER */}
      <div className="flex justify-between items-center w-full px-4 py-3 bg-white shadow-md">
        <h1 className="text-xl md:text-2xl font-bold text-blue-800">
          Senac <span className="text-black">CONTROLE</span>
        </h1>

        <div className="flex space-x-4">
          <User className="text-black cursor-pointer" size={24} />
          <LogOutIcon className="text-black cursor-pointer" size={24} />
        </div>
      </div>

      {/* MENU */}
      <div className="flex justify-start items-center mt-6 w-full max-w-7xl mx-auto px-4 bg-black rounded-md h-10">
        <h1 className="text-sm md:text-base text-white mr-5">Chamados</h1>
        <h1 className="text-sm md:text-base text-white">Clientes</h1>
      </div>

      {/* TÍTULO */}
      <div className="flex justify-start items-center text-black font-bold w-full max-w-7xl mt-8 px-4">
        <h1 className="text-2xl md:text-4xl">Novo Chamado</h1>
      </div>
      {/* NOME */}
      <div className="w-full max-w-7xl mx-auto px-4 mt-8">
        <label className="font-bold text-black">Nome do chamado</label>
        <input
          type="text"
          placeholder="Digite o nome do chamado..."
          className="w-full h-10 mt-2 px-3 rounded-md border-2 border-gray-400 text-black"
        />
      </div>
      {/* DESCRIÇÃO DO PROBLEMA */}
      <div className="w-full max-w-7xl mt-5 mx-auto px-4">
        <div className="flex flex-col">
          <label className="font-bold text-black">Descreva o Problema</label>
          <textarea
            placeholder="Descreva o problema que está ocorrendo..."
            className="w-full h-32 mt-2 px-3 py-2 rounded-md border-2 border-gray-400 text-black resize-none"
          />
        </div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 mt-5">
        <label className="font-bold text-black">Selecione seu cliente</label>

        <select className="w-full appearance-none border-2 border-gray-400 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black">
          <option>Mercado Silva</option>
          <option>Padaria Souza</option>
        </select>

        <span className="pointer-events-none absolute right-7 top-10 text-gray-500">
          ▼
        </span>
      </div>


      <div className="w-full max-w-7xl mx-auto px-4 mt-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full">
          Cadastrar Chamado
        </button>
      </div>
    </div>
  );
}
