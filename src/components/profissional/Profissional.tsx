import './Profissional.css'

function Profissional() {
  return (
    <>
    <div className="container-time">
      <h2 className='expProfissional'>Experiência Profissional</h2>
  <div className="timeline">
    <ul>
    <li>
        <div className="timeline-contentt">
          <h3 className="date">Jul 2024 - Set 2024 (Temporário)</h3>
          <h1>Técnico de Informatica II</h1>
          <p>Apoio à infraestrutura de TeleUTI: plataforma de comunicação por vídeo chamada e que também comunica dados de equipamentos médicos em tempo real (eletrocardiograma, monitor multiparamétrico, ventilador mecânico e bombas de infusão). </p>
        </div>
      </li>
    <li>
        <div className="timeline-contentt">
          <h3 className="date">Fev 2022 - Jun 2023</h3>
          <h1>Analista de sistema I</h1>
          <span>Softplan Planejamento e Sistemas S/A</span>
          <p>Levantamento de Requisitos (funcionais/não funcionais) para o desenvolvimento de novas funcionalidades e/ou correções do sistema SAJADM.</p>
          <p>Validação das funcionalidades desenvolvidas e apresentação técnica das mesmas ao TJSP em busca de sua aprovação e Apoio aos Desenvolvedores e Analistas de suporte (N1 e N2) no escarecimento de dúvidas sobre as regras de negócios</p>
          <p>Produção de recursos educacionais, como manuais técnicos e
          vídeos explicativos para aplicação de treinamentos aos usuarios do sistema sobre as novas funcionalidades desenvolvidas.</p>
        </div>
      </li>
      <li>
        <div className="timeline-contentt">
          <h3 className="date">Out 2020 - Fev 2022</h3>
          <h1>Analista de Negocios</h1>
          <span>Duosystem Tecnologia & Informatica LTDA</span>
          <p>Elaboração de manuais técnicos e aplicação de Treinamento aos profissionais de saúde sobre a utilização da plataforma ESaúde. E apoio no levantamento de dados estatísticos sobre o desempenho da plataforma.</p>
        </div>
      </li>
      

    </ul>
  </div>
</div>
    </>
  )
}

export default Profissional