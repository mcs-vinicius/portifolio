import './Navbar.css' 
/* import Prism from 'https://cdn.skypack.dev/prismjs' */

function Navbar() {

  
/* 
  const TOGGLE: HTMLElement | null = document.querySelector(".theme-toggle");
  
  const SWITCH = (): void => {
    const isDark: boolean = TOGGLE?.matches("[aria-pressed=true]") ? false : true;
    if (TOGGLE) {
      TOGGLE.setAttribute("aria-pressed", String(isDark));
    }
    document.documentElement.className = isDark ? 'dark' : 'light';
  }
  
  const TOGGLE_THEME = (): void => {
    if (!document.startViewTransition) SWITCH();
    document.startViewTransition(SWITCH);
  };
  
  if (TOGGLE) {
    TOGGLE.addEventListener("click", TOGGLE_THEME);
  } */

  return (
    <>
    <header>
      <div className="island__container">

        
  {/*   <button aria-pressed="false" className="theme-toggle">
      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
      <span className="sr-only">Toggle Theme</span>
    </button> */}

   
  
        
        <div className="island"> 
        <div className="island__bar"> 
        <nav>
          <ul className='lista'>
            <li className="menubt"><a href="">First</a></li>
            <li className="menubt"><a href="">Second</a></li>
            <li className="menubt"><a href="">Third</a></li>
          </ul>
        </nav>
        </div>
          <div className="avatar">
            <img src="https://ik.imagekit.io/wzl99vhez/Convite%20Formatura%20Generation/Vinicius.png?updatedAt=1706233530929"alt="Your avatar"/>
          </div>
        </div>
      </div>
    </header> 
    </>
  )
}

export default Navbar