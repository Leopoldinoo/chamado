import Image from "next/image";
import { User } from "lucide-react";
import { LogOutIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen items-center bg-zinc-200 font-mono">
      <div className="header flex justify-between items-center w-full p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-blue-800">Senac <span className="text-black">CONTROLE</span></h1>
        <div className="flex space-x-4">
          <User className="text-black cursor-pointer" size={24} />
          <LogOutIcon className="text-black cursor-pointer" size={24} />
        </div>
      </div>
      <div className="flex justify-start items-center mt-10 w-[1870px] h-10 bg-black rounded-md">
        <h1 className="text-1xl text-white mr-5 ml-5">Chamados</h1>
         <h1 className="text-1xl text-white">Clientes</h1>
      </div>
      <div className="flex justify-start items-center text-black font-bold w-[1700px] h-10 mt-10">
        <h1 className="text-4xl">Novo Cliente</h1>
      </div>
    </div>
  );
}