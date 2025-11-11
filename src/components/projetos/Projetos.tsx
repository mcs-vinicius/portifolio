import React, { useState, useEffect } from 'react';
import { projetos } from '../../data/content';

// Interface para definir o tipo de dados do projeto
interface Projeto {
  nome: string;
  imagem: string;
  repoUrl: string | null; // <-- MUDANÇA AQUI
  deployUrl: string | null;
  descricao: string[];
}

// --- Lógica de Paginação ---
const useIsMobile = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);
  return isMobile;
};

function Projetos() {
  const [currentPage, setCurrentPage] = useState(1);
  const isMobile = useIsMobile(); 
  const PAGE_SIZE = isMobile ? 2 : 6;
  const totalPages = Math.ceil(projetos.length / PAGE_SIZE);

  useEffect(() => {
    setCurrentPage(1);
  }, [isMobile]);

  const projectsToDisplay = projetos.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const goToNextPage = () => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
  };
  const goToPreviousPage = () => {
    setCurrentPage((page) => Math.max(page - 1, 1));
  };

  // --- Renderização ---
  return (
    <div id="Projetos" className="my-16">
      <h2 className="mb-10 text-center font-mono text-3xl font-bold text-white">
        Meus Projetos
      </h2>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projectsToDisplay.map((repo) => (
          <ProjectCard 
            key={repo.nome} 
            repo={repo} 
          />
        ))}
      </div>

      {/* --- Controles de Paginação --- */}
      {projetos.length > PAGE_SIZE && (
        <div className="mt-12 flex items-center justify-center space-x-4">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="rounded-lg border border-electric-purple bg-dark-card/80 px-4 py-2 text-white transition-colors hover:bg-electric-purple disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Anterior
          </button>
          <span className="font-mono text-lg text-gray-300">
            Página {currentPage} de {totalPages}
          </span>
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className="rounded-lg border border-electric-purple bg-dark-card/80 px-4 py-2 text-white transition-colors hover:bg-electric-purple disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Próxima
          </button>
        </div>
      )}
    </div>
  );
}

// --- Card do Projeto (COM RENDERIZAÇÃO CONDICIONAL) ---

const ProjectCard: React.FC<{ repo: Projeto }> = ({ repo }) => {
  return (
    <div
      className="group relative flex flex-col justify-between overflow-hidden rounded-lg border border-gray-800 bg-dark-card/80 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-electric-purple/50 hover:shadow-xl hover:shadow-electric-purple/20"
    >
      <div className="overflow-hidden">
        <img 
          src={repo.imagem} 
          alt={`Capa do projeto ${repo.nome}`} 
          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105" 
        />
      </div>

      <div className="flex flex-col justify-between flex-grow p-6">
        <div>
          <h3 className="mb-2 text-xl font-bold text-electric-purple">{repo.nome}</h3>
          <div className="mb-4 text-sm text-gray-300">
            {repo.descricao.map((paragrafo, index) => (
              <p key={index} className="mb-2 last:mb-0">
                {paragrafo}
              </p>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-4 flex gap-4">
          
          {/* MUDANÇA: Link do GitHub só aparece se repo.repoUrl não for nulo */}
          {repo.repoUrl && (
            <a 
              href={repo.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:text-electric-purple hover:underline"
            >
              Ver no GitHub
            </a>
          )}

          {repo.deployUrl && (
            <a 
              href={repo.deployUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-semibold text-glow-green hover:underline"
            >
              Ver Deploy
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projetos;