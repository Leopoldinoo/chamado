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
        <h1 className="text-2xl md:text-4xl">Novo Cliente</h1>
      </div>
      {/* NOME */}
      <div className="w-full max-w-7xl mx-auto px-4 mt-8">
        <label className="font-bold text-black">Nome Completo</label>
        <input
          type="text"
          placeholder="Digite o nome completo..."
          className="w-full h-10 mt-2 px-3 rounded-md border-2 border-gray-400 text-black"
        />
      </div>

      {/* TELEFONE + EMAIL */}
      <div className="w-full max-w-7xl mt-5 px-4 grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="font-bold text-black">Telefone</label>
          <input
            type="text"
            placeholder="Digite o telefone..."
            className="w-full h-10 mt-2 px-3 rounded-md border-2 border-gray-400 text-black"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-bold text-black">Email</label>
          <input
            type="email"
            placeholder="Digite o email..."
            className="w-full h-10 mt-2 px-3 rounded-md border-2 border-gray-400 text-black"
          />
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 mt-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full">
          Cadastrar Cliente
        </button>
      </div>
    </div>
  );
}
