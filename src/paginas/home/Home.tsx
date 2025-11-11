// Não importe 'Home.css' aqui
import Navbar from '../../components/navbar/Navbar';
import AnimatedHeader from '../../components/header/AnimatedHeader'; // <-- Importa o novo header
import Resumo from '../../components/resumo/Resumo';
import Profissional from '../../components/profissional/Profissional';
import Stacks from '../../components/stacks/Stacks';
import Projetos from '../../components/projetos/Projetos';


function Home() {
  return (
    // Aplicando o novo tema escuro e o fundo aurora
    <div className="aurora-bg flex min-h-screen w-full flex-col items-center bg-dark-bg text-gray-300">
      <Navbar />          {/* A barra fixa com os links */}
      <AnimatedHeader />  {/* A foto e o nome que animam "por cima" */}
      
      {/* O padding-top para dar espaço ao header grande */}
      <main className="z-10 w-full max-w-5xl px-4 pt-96 md:px-8">
        {/* Aplicando a classe de animação em cada seção */}
        <section className="fade-in-section">
          <Resumo />
        </section>
        <section className="fade-in-section">
          <Stacks />
        </section>
        <section className="fade-in-section">
          <Projetos />
        </section>
        <section className="fade-in-section">
          <Profissional />
        </section>
      </main>
    </div>
  );
}

export default Home;