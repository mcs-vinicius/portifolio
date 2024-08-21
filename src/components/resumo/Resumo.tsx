import './Resumo.css'
import { Input, initTWE } from "tw-elements";
initTWE({ Input }, { allowReinits: true });

function Resumo() {
  return (
    <div id='Resumo'  className='container-resumo'>
        
        <figure>
            <div className="spinner"></div>
            <h1 className='tituloResumo'>- Desenvolvedor Frontend </h1>
            <h2 className='tituloName'>Vinicius Monteiro</h2>
            <figcaption>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </figcaption>

            {/* Timeline formação */}
            <div className="timeline-area">
                  <div className="container-grad">
                    <div className="timelines">
                      <h2>Formação</h2>
                    </div>
                    <div className="all-timelines">
                  
                      <div className="single-timeline d-flex-2">
                        <div className="timeline-blank"></div>
                        <div className="timeline-text d-flex-2">
                          <span>
                            <h6>Bootcamp Desenvolvedor Full Stack Java/React</h6>
                            Out 2023 - Mar 2024
                          </span>
                          <div className="t-square"></div>
                        </div>
                      </div>
                    
                      <div className="single-timeline d-flex-2">
                        <div className="timeline-blank"></div>
                        <div className="timeline-text d-flex-2">
                          <span>
                            <h6>ESP. Projetos Ágeis Para Aplicativos Móveis</h6>
                            Fev 2021 - Dez 2021
                          </span>
                          <div className="t-square"></div>
                        </div>
                      </div>
                  
                      <div className="single-timeline d-flex-2">
                        <div className="timeline-blank"></div>
                        <div className="timeline-text d-flex-2">
                          <span>
                            <h6>Analise e Desenvolvimento de Sistemas</h6> 
                            Fev 2019 - Dez 2020
                          </span>
                          <div className="t-square"></div>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <hr/>
              <div className="container">
                <div className='div-1'>
                <button className='buttonSC'>
                  <a href="mailto:monteirov841@gmail.com">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABLklEQVR4nO2TMUoDQRSGJ2kMWuUAyQ1SGwgYCGk8QJocwNYrWNrkAHZ28Q5CjhFTaKOFlQQ7EZNPFv4Jw5DRmeyqEeaDYZc3b/73v7ezxmQymX2CX+JfGPjQ8w7olphoVxquZpSBY2Cu9xVwBRwlFG4Al07Re+Ak2oAJi/QTu7bmD339bw1YYqcR6trLSTcQEH9wp/FV15UYKADqwLV3USdamwumnLrZQpkJtICZttfArTq1rBQr9lBuqxIDwBhYausJGCreAxZaPcWGykFnxjsbAJrA1Onypoh5+QfF8mJN5Vqm9ly0AWAAPOr9FTgLHgprjYAXaTwDpykG1s63bKcWd/Ta3t2JNvAOXIRuc6KJGnAOvKUY6JQtvEW7s9NfUCUpE/hR9tdAJpMxf8AnaaRqwbOikt4AAAAASUVORK5CYII="/>
                  </a>
                </button>
                <button className='buttonSC'>
                  <a href="https://github.com/mcs-vinicius">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAACh0lEQVR4nO2XT0gVURTGJyuhRdtWFWorsdJqlbSJUHIhJGXhwjJokwYFFRG00mdBFCpuUjKK/kEk6a5lixYJEYSbFkWECVGR5Ou/2E8O74i3250782bmLYI+uDBv5jvnfvfOme+eFwT/KoByYAdwDBgAruqQ6y59trKUArYCN4A80ZgFrgNbshSwHhgC5ikev4F7wIa0IvYDX0mP70B7EgHLgJyuKCtIrh7JXYyQHKVDd1wR+zLeCRuSuy1KRCXwzQqUIm0CmoFh4KfxTK6ndPwy7ktdDWpcq0OMPK/wCbntCHpjcaqBM8AmR3wtcNaeBPjkyHvT5xPzjoBXQUoA7xx5Za46F1nMyoUfaZwSWO2puWsu2/Y5Zk0KIds9eT//sUg9H8LwtKhv/28hZcAzT/56kywHWBgOJRURM3+nSezzEOsyELLTk/+ySRzxECszELLLOnfM4h0xiXK6Pgf2Ai1qQjIagTUZCKk2ci6OPcCkzG0Se9UZHwO3gItqTNLo1GYgRD6Go2qE59UqHqk19NjF9AW4BNwHngAv1Lo/yjtOIaJDnXUaeAlMAGNAv1p9p+2qPoiYxgQiDuqqfVjq4oDlwIxFeG39lgK7AzQAKzyTr9I6e0g0ZKfK7ARyspq4C+wOcdwZfX0HxBl1tKlxxelpF3HFtZLNDmKHFpo0wzZOOnKcoDhsDNvWMYs4qferdJLTwBFgm+fVjMcUMRrVseetgNbQAHeO+hgiZIfXRSU6bAXNacN0Tn3geER8udXFJT+/KJhOGD7EiH/viV8ysJh/Jy6UQEguUUtB4TXlMxCST91OUCjgB0bS6Rgxbw3+KLA2lQgT0rWLAQGngggIR7lun/iPIBoLNHda17jCnrIAAAAASUVORK5CYII="/>
                  </a>         
                </button>
                <button className='buttonSC'>
                  <a href="https://www.linkedin.com/in/viniciusmcsilva/">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZUlEQVR4nO2Xvy4FURCHNzqFnhbxpxPPIHG13oFoVSSUGjqlRiSiJEQjHkCCq/UOEhKFENnv5ycn2Zts1q5VXGcldpJp5syc+TJzTjKTJK3UiO0B21Npms79hoa7Q446iHHgTpJ/U4Gu7bHKShABIgdzW1oZ29OxIHoa2vQFJE3T+dggIWcZSKcBkM6PQIBXYMX2LLAMvDQCImk37yNppymQ0wLIUVMglnQObEo6Bj6aBPFfeKw3kvZ6Clxl9vu8XdJlZn/LfA4knQFP/QLZyPsAq9nZXiF2UdK+7eG83fagpK2qlvYdxPZQ8o1U/ba+g9RJAAWeo4AAS8AD8AisF88lncRozQjwno+1PVMA2Y7xWBdKYlcKsRuxfo0LsastiNqK/Ls3IukCWOtpGAmyJNcF+2HF+JD3ufgpyN8YnsNor8ggtieqFqxuLIgw61SunrbHwgYWCWK0FCLiEj5Zu4QnrSTJJ8twQgrN0YOOAAAAAElFTkSuQmCC"/>
                  </a> 
                </button>
                </div>

                <div className='div-2'>
                  <button className="button">
                    <a href="https://ik.imagekit.io/wzl99vhez/Portifolio/Curriculo%20Frontend%20-%20Vinicius%20Monteiro%20.pdf?updatedAt=1722828472211" >
                        <span className="button_lg">
                            <span className="button_sl"></span>
                            <span className="button_text">Download CV</span>
                        </span>
                    </a>      
                  </button>
                </div>
              
                <span className="title">Contato</span>            
            </div>
        </figure>
    </div>
  )
}

export default Resumo