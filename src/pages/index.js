import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { FiGithub, FiTerminal, FiGlobe } from 'react-icons/fi'; // Exemplo de ícones de uma biblioteca de React Icons
import { FiArrowRight, FiZap, FiShield } from 'react-icons/fi'; // Exemplo de ícones
import { FiAlertCircle, FiEyeOff, FiLock } from 'react-icons/fi';



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-green-400">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="text-center py-20 bg-black">
        <h1 className="text-4xl font-bold">The Spy Hacker🔍</h1>
        <p className="mt-4 text-lg">Descubra se está sendo corno! 🐂</p>
        <div className="mt-6 flex justify-center space-x-4">
          <Input placeholder="Digite seu email" className="p-3 w-1/3 bg-[#000000] text-[#4ADE80] border-[#4ADE80] rounded-xl" />
          <Button className="bg-green-500 text-black">Saber a verdade! 🐂 </Button>
        </div>
      </header>

      {/* Seção de Dores e Soluções */}
<div className="bg-black text-green-400 py-16">
  <div className="container mx-auto px-4 text-center">
    
    <h2 className="text-4xl font-bold mb-6">Seus Segredos Estão Seguros?</h2>
    <p className="text-lg mb-12">Descubra o que está sendo escondido de você. Resolva agora seus problemas antes que seja tarde demais.</p>

    {/* Ícones e Textos Impactantes */}
    <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-16 mt-8">
      
      <div className="flex flex-col items-center space-y-6 pt-10	">
        <FiAlertCircle className="text-5xl text-red-500" />
        <h3 className="text-xl font-semibold">Traições Desmascaradas</h3>
        <p className="text-sm text-center">Pessoas estão mentindo para você? Eu descubro tudo e exponho cada detalhe.</p>
      </div>

      <div className="flex flex-col items-center space-y-6 pt-10">
        <FiEyeOff className="text-5xl text-yellow-500" />
        <h3 className="text-xl font-semibold">Invasões Invisíveis</h3>
        <p className="text-sm text-center">Acesso completo sem deixar rastros. Eles nunca saberão o que os atingiu.</p>
      </div>

      <div className="flex flex-col items-center space-y-6 pt-10">
        <FiLock className="text-5xl text-green-500" />
        <h3 className="text-xl font-semibold">Segredos Revelados</h3>
        <p className="text-sm text-center">Nada fica escondido. A verdade sempre vem à tona, por mais fundo que esteja.</p>
      </div>

</div>

  </div>
</div>

      {/* Call to Action Section */}
<section className="py-16 bg-black text-green-400 text-center">
  <div className="container mx-auto px-4">
    
    {/* Título e Subtítulo */}
    <h2 className="text-4xl font-bold mb-6">Pronto para começar?</h2>
    <p className="text-lg mb-8">Junte-se a nós hoje e descubra o poder de quem domina o jogo. Assine agora e exponha a verdade com <span className="text-green-500">Gustavo Kurtz</span>.</p>

    {/* Destaque de Benefícios com Ícones */}
    <div className="flex justify-center space-x-8 mb-10">
      <div className="flex flex-col items-center">
        <FiZap className="text-4xl mb-2 text-green-500" />
        <p className="text-lg">Ataques Precisos</p>
      </div>
      <div className="flex flex-col items-center">
        <FiShield className="text-4xl mb-2 text-green-500" />
        <p className="text-lg">Segurança Garantida</p>
      </div>
      <div className="flex flex-col items-center">
        <FiArrowRight className="text-4xl mb-2 text-green-500" />
        <p className="text-lg">Domine o Jogo</p>
      </div>
    </div>

    {/* Botão de Ação Centralizado */}
<div className="flex justify-center">
  <Button className="bg-green-500 text-black font-semibold px-8 py-4 flex items-center space-x-2 hover:bg-green-400 transition duration-300">
    <span>Assine Agora</span> 
    <FiArrowRight className="text-xl" />
  </Button>
</div>

  </div>
</section>

      {/* Footer */}
<footer className="bg-black text-green-400 py-8">
  <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    
    {/* Logotipo e frase */}
    <div className="text-center md:text-left mb-4 md:mb-0">
      <h2 className="text-2xl font-bold">HackerZone</h2>
      <p className="text-sm mt-2">Descobrindo traições, hackeando sistemas e expondo a verdade.</p>
    </div>
    
    {/* Ícones sociais estilo hacker */}
    <div className="flex space-x-6">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FiGithub className="text-2xl hover:text-green-500 transition duration-300" />
      </a>
      <a href="https://darkweb-link.com" target="_blank" rel="noopener noreferrer">
        <FiTerminal className="text-2xl hover:text-green-500 transition duration-300" />
      </a>
      <a href="https://hackerwebsite.com" target="_blank" rel="noopener noreferrer">
        <FiGlobe className="text-2xl hover:text-green-500 transition duration-300" />
      </a>
    </div>
    
  </div>

  {/* Rodapé inferior */}
  <div className="mt-6 text-center border-t border-green-500 pt-4 text-sm">
    <p>&copy; 2024 Gustavo Kurtz. Todos os direitos reservados.</p>
  </div>
</footer>
    </div>

  ); 
}
