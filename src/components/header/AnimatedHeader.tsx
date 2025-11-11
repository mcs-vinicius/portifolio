import { useState, useEffect } from 'react';

function AnimatedHeader() {
  const avatarUrl = "https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Vinicius.png?updatedAt=1706233530929";

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 z-50 w-full h-screen transition-all duration-500 ease-in-out"
      style={{ pointerEvents: 'none' }} 
    >
      {/* Avatar Image */}
      <img 
        src={avatarUrl} 
        alt="Vinicius Monteiro" 
        className={`
          rounded-full border-electric-purple fixed
          transition-all duration-500 ease-in-out
          ${isScrolled
            ? 'h-10 w-10 border-2 top-[22px] left-1/2 -translate-x-[150px] md:-translate-x-[250px]' // Posição "pousada"
            : 'h-36 w-36 border-4 top-48 left-1/2 -translate-x-1/2' // MUDANÇA: 'h-32 w-32' para 'h-36 w-36'
          }
        `} 
        style={{ pointerEvents: 'auto' }}
      />
      
      {/* Nome */}
      <span 
        className={`
          fixed font-bold text-white
          transition-all duration-500 ease-in-out
          whitespace-nowrap
          ${isScrolled
            ? 'text-lg font-mono top-7 left-1/2 -translate-x-[90px] md:-translate-x-[180px] hidden sm:block' 
            : 'text-3xl md:text-4xl font-sans top-[21.5rem] left-1/2 -translate-x-1/2' // MUDANÇA: 'top-80' para 'top-[21.5rem]'
          }
        `}
      >
        Vinicius Monteiro
      </span>
    </div>
  );
}

export default AnimatedHeader;