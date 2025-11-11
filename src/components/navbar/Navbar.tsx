import { useState, useEffect } from 'react'; // <-- MUDANÇA AQUI (removemos o 'React,')

function Navbar() {
  // Adicionamos a mesma lógica de scroll aqui
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Começa a animação após rolar 50 pixels
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // A barra de navegação fica fixa, mas ATRÁS da foto/nome (z-40)
    <header className="fixed top-0 left-0 z-40 w-full">
      {/* O CONTAINER DA NAV (o vidro).
        Ele é 'relative' para que os links possam ser 'absolute' dentro dele.
        Sua LARGURA MÁXIMA (max-w) anima suavemente.
      */}
      <nav 
        className={`
          mx-auto mt-4 h-[60px] rounded-full bg-black/50 shadow-lg backdrop-blur-lg 
          relative flex items-center
          transition-all duration-500 ease-in-out
          ${isScrolled
            ? 'max-w-3xl px-4 md:px-8' // Estado "Rolando": Larga
            : 'max-w-xs px-4' // Estado "No Topo": Curta
          }
        `}
      >
        
        {/* LINKS.
          Agora estão posicionados de forma 'absolute' dentro da <nav>.
          Vamos animar 'left', 'right' e 'transform' para um slide suave.
        */}
        <ul 
          className={`
            flex absolute top-1/2 -translate-y-1/2
            space-x-2 md:space-x-4
            transition-all duration-500 ease-in-out
            ${isScrolled
              ? 'left-auto right-4 md:right-8' // Posição "Rolando": Anima para a direita
              : 'left-1/2 -translate-x-1/2' // Posição "No Topo": Começa no centro
            }
          `}
        >
          <li>
            <a href="#Resumo" className="rounded-full px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-dark-card hover:text-electric-purple">
              Resumo
            </a>
          </li>
          <li>
            <a href="#Projetos" className="rounded-full px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-dark-card hover:text-electric-purple">
              Projetos
            </a>
          </li>
          <li>
            <a href="#Profissional" className="rounded-full px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-dark-card hover:text-electric-purple">
              Experiência
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;