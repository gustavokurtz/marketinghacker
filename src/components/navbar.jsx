import { GiNinjaMask } from 'react-icons/gi'; // Ícone que representa um hacker/mascarado
import { Avatar } from "@/components/ui/avatar"; // Se o Avatar for necessário, mantenha ele
import { useState } from "react";

export function Navbar() {
  return (
    <nav className="bg-black p-6 text-green-400 flex justify-between items-center">
      {/* Ícone Hacker e Título */}
      <div className="flex items-center space-x-3 hover:text-green-500 transition duration-300">
        <GiNinjaMask className="text-4xl text-green-500 hover:text-green-400 transition duration-300" />
        <h1 className="text-2xl font-bold font-mono tracking-widest hover:text-green-500 transition px-4 duration-300">
          HackerZone
        </h1>
      </div>

      {/* Avatar à direita, se for necessário */}
      <div className="w-12 h-12 rounded-full bg-green-400 flex items-center justify-center">
        <img src="/hacker.png" alt="User Avatar" className="rounded-full" />
      </div>
    </nav>
  );
}
