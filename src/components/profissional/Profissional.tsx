import { profissional } from '../../data/content'; // Importa os dados
// Sem importação de CSS!

function Profissional() {
  return (
    <div id="Profissional" className="my-16 rounded-lg border border-gray-800 bg-dark-card/80 p-6 shadow-xl backdrop-blur-sm md:p-10">
      <h2 className="mb-10 text-center font-mono text-3xl font-bold text-white">
        Experiência Profissional
      </h2>
      
      <div className="relative mx-auto max-w-2xl border-l-2 border-gray-700 pl-8">
        {profissional.map((job, index) => (
          <div key={index} className="mb-12">
            {/* O Ponto na Timeline */}
            <span className="absolute -left-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-electric-purple ring-4 ring-dark-card">
              {/* Ícone de Maleta SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="currentColor" viewBox="0 0 16 16"><path d="M8 1.5a.5.5 0 0 1 .5.5V3a.5.5 0 0 1-1 0V2a.5.5 0 0 1 .5-.5M6 3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1H6zM4 4.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zM2.5 7a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5zM1 7a1.5 1.5 0 0 1 1.5-1.5h11A1.5 1.5 0 0 1 15 7v4a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 11.5z"/></svg>
            </span>
            
            {/* Conteúdo do Card */}
            <div className="ml-4">
              <h3 className="text-sm font-semibold uppercase text-gray-400">{job.data}</h3>
              <h1 className="mb-1 text-xl font-semibold text-electric-purple">{job.titulo}</h1>
              {job.empresa && (
                <span className="mb-2 block text-base font-medium text-white">{job.empresa}</span>
              )}
              
              {/* Renderiza a descrição como string ou lista */}
              {typeof job.descricao === 'string' ? (
                <p className="text-gray-300">{job.descricao}</p>
              ) : (
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  {job.descricao.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profissional;