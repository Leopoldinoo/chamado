import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen items-center bg-zinc-200 font-mono">
      <div className="flex items-center justify-center mt-20">
        <h1 className="text-4xl text-black">Gerencie sua Empresa</h1>
      </div>

      <div className="flex items-center justify-center mt-10">
        <h1 className="text-5xl text-blue-800 font-bold">Atendimentos, Clientes</h1>
      </div>

      <Image src="/empresa.png" width={700} height={600} alt="Imagem da empresa"/>
    </div>
  );
}