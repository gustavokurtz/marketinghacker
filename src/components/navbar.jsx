import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black p-6 text-green-400 flex justify-between items-center">
      {/* Substitui o título pela imagem do Avatar */}
      <Avatar className="bg-green-400 w-12 h-12 rounded-full">
        {/* Acessa a imagem no diretório public */}
        <img src="/hacker.png" alt="User Avatar" />
      </Avatar>
      
      <div className="md:hidden">
        <Button 
          onClick={() => setIsOpen(!isOpen)} 
          className="text-green-400 bg-[#000000] border-2 border-[#4ADE80] p-2 rounded-xl"
        >
          Menu
        </Button>
      </div>
      <div className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
        <Button variant="ghost" className="text-green-400">Home</Button>
        <Button variant="ghost" className="text-green-400">About</Button>
        <Button variant="ghost" className="text-green-400">Contact</Button>
      </div>
    </nav>
  );
}
