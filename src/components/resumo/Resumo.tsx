import './Resumo.css'; // <-- Importa o CSS da animação E dos ícones
import { resumo, formacao } from '../../data/content';

// SVGs como strings (mais fácil de gerenciar)
const SvgEmail = (
  <svg fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);

const SvgGitHub = (
  <svg fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c-4.3 1.4 -4.3-2.5 -6-3m12 5v-3.5c0-1 .1-1.4 -.5-2c2.8-.3 5.5-1.4 5.5-6c0-1.3-.5-2.4-1.3-3.2c.1-.3.5-1.5-.1-3.2c0 0-1.1-.3-3.5 1.3c-1-.3-2.1-.4-3.2-.4s-2.2.1-3.2.4C6.1 2.8 5 3.1 5 3.1c-.6 1.7-.2 2.9-.1 3.2C4 7.1 3.5 8.2 3.5 9.5c0 4.6 2.7 5.7 5.5 6c-.6.5-1 1.4-1 2.8V21" />
  </svg>
);

const SvgLinkedIn = (
  <svg fill="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
     <path strokeLinecap="round" strokeLinejoin="round" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
  </svg>
);

function Resumo() {
  return (
    <div id="Resumo" className="my-16 rounded-lg border border-gray-800 bg-dark-card/80 p-6 shadow-xl backdrop-blur-sm md:p-10">
      
      {/* Cabeçalho */}
      <div className="mb-6">
        <h1 className="typing-effect">
          {resumo.titulo}
        </h1>
      </div>

      {/* Descrição */}
      <figcaption className="mb-8 border-l-4 border-electric-purple pl-4 text-base text-gray-300 md:text-lg">
        {resumo.descricao.map((paragrafo, index) => (
          <p key={index} className="mb-4">{paragrafo}</p>
        ))}
      </figcaption>

      {/* Formação (Timeline) */}
      <div className="mb-8">
        <h2 className="mb-6 text-center font-mono text-2xl font-bold text-white">Formação</h2>
        <div className="relative border-l-2 border-gray-700 pl-6">
          {formacao.map((item, index) => (
            <div key={index} className="mb-8">
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-electric-purple ring-4 ring-dark-card">
              </span>
              <h6 className="text-md font-semibold text-white">{item.titulo}</h6>
              <span className="text-sm text-gray-400">{item.periodo}</span>
            </div>
          ))}
        </div>
      </div>

      <hr className="mb-6 border-gray-700" />

      {/* Botões e Contato (ÍCONES ATUALIZADOS) */}
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        
        {/* MUDANÇA: Nova estrutura de botões */}
        <div className="social-login-icons">
          
          {/* Botão Email */}
          <a href="mailto:monteirov841@gmail.com" className="social-container" target="_blank" rel="noopener noreferrer">
            <div className="icon">
              {SvgEmail}
            </div>
            <div className="social-icon social-icon-email">
              {SvgEmail}
            </div>
          </a>

          {/* Botão GitHub */}
          <a href="https://github.com/mcs-vinicius" className="social-container" target="_blank" rel="noopener noreferrer">
            <div className="icon">
              {SvgGitHub}
            </div>
            <div className="social-icon social-icon-github">
              {SvgGitHub}
            </div>
          </a>
          
          {/* Botão LinkedIn */}
          <a href="https://www.linkedin.com/in/viniciusmcsilva/" className="social-container" target="_blank" rel="noopener noreferrer">
            <div className="icon">
              {SvgLinkedIn}
            </div>
            <div className="social-icon social-icon-linkedin">
              {SvgLinkedIn}
            </div>
          </a>

        </div>
        {/* Fim da nova estrutura de botões */}

        {/* Botão de Download (permanece o mesmo) */}
        <div className="button-borders">
          <a 
            href="https://ik.imagekit.io/wzl99vhez/Portifolio/FrontEnd%20-%20Vinicius%20Monteiro%20C%20Silva.pdf?updatedAt=1762868037726" 
            className="primary-button"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Resumo;