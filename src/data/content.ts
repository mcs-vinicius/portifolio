// src/data/content.ts

// ... (resumo, formacao, profissional - permanecem iguais)
export const resumo = {
  titulo: "- Desenvolvedor Frontend",
  nome: "Vinicius Monteiro",
  descricao: [
    "Desenvolvedor Frontend com experiência em React, JS, TypeScript entre outras tecnologias web. Com dois anos de atuação como freelancer, trabalhei no desenvolvimento de interfaces eficientes e responsivas, pois possuo uma abordagem minuciosa em cada etapa do desenvolvimento visando a excelência e a entrega de soluções de alta qualidade.",
    "Minha trajetória também inclui experiências significativas como Analista de Sistema e Analista de Negócios, onde trabalhei com o levantamento/especificação de requisitos para o desenvolvimento de melhorias de sistema, testes unitarios e produção de recursos educacionais para capacitação de usuários, criação de manuais técnicos e promovendo treinamentos.",
    "Atualmente, estou em busca de uma oportunidade efetiva como Desenvolvedor Frontend, onde eu possa aplicar minha experiência técnica, colaborar em projetos desafiadores e seguir evoluindo profissionalmente. Meu foco está em desenvolver soluções que agreguem valor, com qualidade, atenção aos detalhes e compromisso com resultados."
  ]
};
export const formacao = [
  {
    titulo: "Bootcamp Desenvolvedor Full Stack Java/React",
    periodo: "Out 2023 - Mar 2024"
  },
  {
    titulo: "ESP. Projetos Ágeis Para Aplicativos Móveis",
    periodo: "Fev 2021 - Dez 2021"
  },
  {
    titulo: "Analise e Desenvolvimento de Sistemas",
    periodo: "Fev 2019 - Dez 2020"
  }
];
export const profissional = [
  {
    data: "Jul 2024 - Set 2024 (Temporário)",
    titulo: "Técnico de Informatica II",
    empresa: "Hospital Israelita Albert Einstein",
    descricao: "Apoio à infraestrutura de TeleUTI: plataforma de comunicação por vídeo chamada e que também comunica dados de equipamentos médicos em tempo real (eletrocardiograma, monitor multiparamétrico, ventilador mecânico e bombas de infusão)."
  },
  {
    data: "Fev 2022 - Jun 2023",
    titulo: "Analista de sistema I",
    empresa: "Softplan Planejamento e Sistemas S/A",
    descricao: [
      "Levantamento de Requisitos (funcionais/não funcionais) para o desenvolvimento de novas funcionalidades e/ou correções do sistema SAJADM.",
      "Validação das funcionalidades desenvolvidas e apresentação técnica das mesmas ao TJSP em busca de sua aprovação e Apoio aos Desenvolvedores e Analistas de suporte (N1 e N2) no escarecimento de dúvidas sobre as regras de negócios.",
      "Produção de recursos educacionais, como manuais técnicos e vídeos explicativos para aplicação de treinamentos aos usuarios do sistema sobre as novas funcionalidades desenvolvidas."
    ]
  },
  {
    data: "Out 2020 - Fev 2022",
    titulo: "Analista de Negocios",
    empresa: "Duosystem Tecnologia & Informatica LTDA",
    descricao: "Elaboração de manuais técnicos e aplicação de Treinamento aos profissionais de saúde sobre a utilização da plataforma ESaúde. E apoio no levantamento de dados estatísticos sobre o desempenho da plataforma."
  }
];




// 👇 ATUALIZE O ARRAY 'projetos'
export const projetos = [
  {
    nome: "Clã Toxicos (Survivor.io)",
    imagem: "https://ik.imagekit.io/wzl99vhez/Portifolio/image.png?updatedAt=1762879539106",
    repoUrl: null, // <-- EXEMPLO DE COMO DESABILITAR O LINK
    deployUrl: "https://clatoxicos.vercel.app/",
    descricao: [
      "Esse site possui algumas ferramentas para auxiliar os lideres a controlar alguns dados de seus membros como ranking, pontuações, perfis, status e entre outras atividades. Por motivo de segurança não posso compartilhar o repositorio do projeto, porém você pode realizar o acesso através das credenciais",
      "Login: teste",
      "Senha: testeteste"
    ]
  },
  {
    nome: "Projeto - SegundaChance",
    imagem: "https://ik.imagekit.io/wzl99vhez/Portifolio/projetos/Segunda%20chance.png?updatedAt=1724389654700",
    repoUrl: "https://github.com/mcs-vinicius/segunda-chance", // <-- EXEMPLO DE COMO DESABILITAR O LINK
    deployUrl: "https://segunda-chance-pi.vercel.app",
    descricao: [
      "Plataforma de e-commerce social focada na ressocialização, conectando egressos do sistema prisional a oportunidades."
    ]
  },
  {
    nome: "Blog Pessoal - React",
    imagem: "https://ik.imagekit.io/wzl99vhez/Portifolio/projetos/blogpessoal-gen.png?updatedAt=1724475877658",
    repoUrl: "https://github.com/mcs-vinicius/blogpessoal-react",
    deployUrl: "https://blogpessoal-react-five.vercel.app",
    descricao: [
      "Blog pessoal completo construído com React no front-end e Spring Boot no back-end, incluindo CRUD de postagens e temas."
    ]
  },
  {
    nome: "Projeto Cafeteria",
    imagem: "https://ik.imagekit.io/wzl99vhez/Portifolio/projetos/Cafeshop.png?updatedAt=1724566003632",
    repoUrl: "https://github.com/mcs-vinicius/Projeto-CoffeShop-Dio",
    deployUrl: "https://projeto-coffe-shop-dio.vercel.app",
    descricao: [
      "Landing page estática para uma cafeteria, desenvolvida com HTML, CSS e JavaScript puro."
    ]
  },
  // ... (mantenha os outros projetos)
  {
    nome: "Creche - Dog Walker",
    imagem: "https://ik.imagekit.io/wzl99vhez/Portifolio/projetos/Dogwalker.png?updatedAt=1724566722299",
    repoUrl: "https://github.com/mcs-vinicius/Projeto-CrecheDogWalker",
    deployUrl: "https://projeto-creche-dog-walker.vercel.app",
    descricao: [
      "Página de serviços para um hotel e creche de cães, focada em um design responsivo e atraente."
    ]
  },
  {
    nome: "Clone - HBO Max",
    imagem: "https://ik.imagekit.io/wzl99vhez/Portifolio/projetos/clone-hbo.png?updatedAt=1724566085730",
    repoUrl: "https://github.com/mcs-vinicius/Projeto-Clone-HBO-Dio",
    deployUrl: "https://projeto-clone-hbo-dio.vercel.app",
    descricao: [
      "Clone da interface da plataforma de streaming HBO Max, focado na replicação do layout com HTML e CSS."
    ]
  },
  {
    nome: "Convite Formatura - Generation",
    imagem: "https://ik.imagekit.io/wzl99vhez/Portifolio/projetos/Convite%20formatura-68.png?updatedAt=1724476423771",
    repoUrl: "https://github.com/mcs-vinicius/convite-formatura-gen68",
    deployUrl: "https://convite-formatura-gen68-git-main-vinicius-projects-b861dfd0.vercel.app",
    descricao: [
      "Projeto de um convite de formatura digital e interativo para a turma 68 da Generation Brasil."
    ]
  }
];





    
 