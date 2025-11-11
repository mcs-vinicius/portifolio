import './Stacks.css'; // Mantenha este arquivo para as animações

function Stacks() {
  const frontendSkills = [
    { name: "HTML", img: "https://ik.imagekit.io/wzl99vhez/Portifolio/html.svg?updatedAt=1724120769121" },
    { name: "CSS", img: "https://ik.imagekit.io/wzl99vhez/Portifolio/css3.svg?updatedAt=1724120769103" },
    { name: "Javascript", img: "https://ik.imagekit.io/wzl99vhez/Portifolio/javascript.svg?updatedAt=1724120768785" },
    { name: "React", img: "https://ik.imagekit.io/wzl99vhez/Portifolio/react.svg?updatedAt=1724120769373" },
    { name: "Flutter", img: "https://ik.imagekit.io/wzl99vhez/Portifolio/flutter.svg?updatedAt=1724120770428" },
    { name: "Typescript", img: "https://ik.imagekit.io/wzl99vhez/Portifolio/typescript.svg?updatedAt=1724120767831" },
    { name: "Tailwind", img: "https://ik.imagekit.io/wzl99vhez/Portifolio/tailwindcss.svg?updatedAt=1724120768723" },
    // ... duplicados para o loop
    { name: "HTML", img: "https://ik.imagekit.io/wzl99vhez/Portifolio/html.svg?updatedAt=1724120769121" },
    { name: "CSS", img: "https://ik.imagekit.io/wzl99vhez/Portifolio/css3.svg?updatedAt=1724120769103" },
  ];

  const backendSkills = [
    { name: "Java", img: "https://ik.imagekit.io/wzl99vhez/Portifolio/java.svg?updatedAt=1724120768361" },
    { name: "Spring boot", img: "https://ik.imagekit.io/wzl99vhez/Portifolio/spring.svg?updatedAt=1724120766734" },
    { name: "Hibernate", img: "https://ik.imagekit.io/wzl99vhez/Portifolio/hibernate.svg?updatedAt=1724125447705" },
    { name: "Node", img: "https://ik.imagekit.io/wzl99vhez/Portifolio/nodejs.svg?updatedAt=1724120767883" },
    { name: "Mysql", img: "https://ik.imagekit.io/wzl99vhez/Portifolio/mysql.svg?updatedAt=1724120766774" },
    { name: "PostgreSql", img: "https://ik.imagekit.io/wzl99vhez/Portifolio/postgresql.svg?updatedAt=1724120768185" },
    // ... duplicados
    { name: "Java", img: "https://ik.imagekit.io/wzl99vhez/Portifolio/java.svg?updatedAt=1724120768361" },
    { name: "Spring boot", img: "https://ik.imagekit.io/wzl99vhez/Portifolio/spring.svg?updatedAt=1724120766734" },
  ];

  return (
    // Container principal estilizado com Tailwind
    <div className="my-16 flex w-full flex-col items-center justify-center rounded-lg border border-gray-800 bg-dark-card/80 p-6 py-12 shadow-xl backdrop-blur-sm md:p-10">
      <h2 className="mb-10 text-center font-mono text-3xl font-bold text-white">
        Tecnologias
      </h2>

      <div className="carousel-wrapper w-full max-w-2xl md:max-w-4xl">
        <div className="carousel">
          {frontendSkills.map((skill, index) => (
            <div key={`f-${index}`} className="item">
              <img src={skill.img} alt={skill.name} />
            </div>
          ))}
        </div>
        <div className="carousel-2">
          {backendSkills.map((skill, index) => (
            <div key={`b-${index}`} className="item">
              <img src={skill.img} alt={skill.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stacks;