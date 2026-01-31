import { User } from "lucide-react";
import { LogOutIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 font-mono">

      {/* HEADER */}
      <div className="w-full flex justify-between items-center px-6 py-3 bg-white shadow">
        <h1 className="font-bold text-black"> <span className="text-blue-600">Senac</span> CONTROLE</h1>
        <div className="flex space-x-4">
          <User className="text-black cursor-pointer" size={24} />
          <LogOutIcon className="text-black cursor-pointer" size={24} />
        </div>
      </div>

      {/* CONTEÚDO CENTRAL */}
      <div className="flex flex-col items-center justify-center flex-1 w-full">

        <h1 className="text-2xl font-bold mb-6 text-black">Abrir chamado</h1>

        {/* CARD */}
        <div className="bg-gray-300 rounded-lg p-6 w-full max-w-sm shadow">

          {/* Cliente selecionado */}
          <div className="flex justify-between items-center bg-blue-200 px-3 py-2 rounded mb-4 text-sm text-black">
            <span>Cliente Selecionado: Mercado Silva</span>
            <button className="text-red-500 font-bold">✕</button>
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="Digite o nome do chamado..."
            className="w-full border rounded px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black bg-white"
          />

          {/* Textarea */}
          <textarea
            placeholder="Descreva o seu problema..."
            className="w-full border rounded px-3 py-2 mb-4 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
          />

          {/* Botão */}
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold transition">
            Cadastrar
          </button>

        </div>
      </div>
    </div>
  );
}
