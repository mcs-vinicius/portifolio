import React from 'react'
import './Resumo.css'

function Resumo() {
    
  return (
    <div className='container-resumo'>
        
        <figure>
            <div className="spinner"></div>
            <h1 className='tituloResumo'>- Desenvolvedor Frontend </h1>
            <h2 className='tituloName'>Vinicius Monteiro</h2>
            <figcaption>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </figcaption>

            <div className="container">
            <button>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABLklEQVR4nO2TMUoDQRSGJ2kMWuUAyQ1SGwgYCGk8QJocwNYrWNrkAHZ28Q5CjhFTaKOFlQQ7EZNPFv4Jw5DRmeyqEeaDYZc3b/73v7ezxmQymX2CX+JfGPjQ8w7olphoVxquZpSBY2Cu9xVwBRwlFG4Al07Re+Ak2oAJi/QTu7bmD339bw1YYqcR6trLSTcQEH9wp/FV15UYKADqwLV3USdamwumnLrZQpkJtICZttfArTq1rBQr9lBuqxIDwBhYausJGCreAxZaPcWGykFnxjsbAJrA1Onypoh5+QfF8mJN5Vqm9ly0AWAAPOr9FTgLHgprjYAXaTwDpykG1s63bKcWd/Ta3t2JNvAOXIRuc6KJGnAOvKUY6JQtvEW7s9NfUCUpE/hR9tdAJpMxf8AnaaRqwbOikt4AAAAASUVORK5CYII="/>
            </button>
            <button>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAACXBIWXMAAAsTAAALEwEAmpwYAAACh0lEQVR4nO2XT0gVURTGJyuhRdtWFWorsdJqlbSJUHIhJGXhwjJokwYFFRG00mdBFCpuUjKK/kEk6a5lixYJEYSbFkWECVGR5Ou/2E8O74i3250782bmLYI+uDBv5jvnfvfOme+eFwT/KoByYAdwDBgAruqQ6y59trKUArYCN4A80ZgFrgNbshSwHhgC5ikev4F7wIa0IvYDX0mP70B7EgHLgJyuKCtIrh7JXYyQHKVDd1wR+zLeCRuSuy1KRCXwzQqUIm0CmoFh4KfxTK6ndPwy7ktdDWpcq0OMPK/wCbntCHpjcaqBM8AmR3wtcNaeBPjkyHvT5xPzjoBXQUoA7xx5Za46F1nMyoUfaZwSWO2puWsu2/Y5Zk0KIds9eT//sUg9H8LwtKhv/28hZcAzT/56kywHWBgOJRURM3+nSezzEOsyELLTk/+ySRzxECszELLLOnfM4h0xiXK6Pgf2Ai1qQjIagTUZCKk2ci6OPcCkzG0Se9UZHwO3gItqTNLo1GYgRD6Go2qE59UqHqk19NjF9AW4BNwHngAv1Lo/yjtOIaJDnXUaeAlMAGNAv1p9p+2qPoiYxgQiDuqqfVjq4oDlwIxFeG39lgK7AzQAKzyTr9I6e0g0ZKfK7ARyspq4C+wOcdwZfX0HxBl1tKlxxelpF3HFtZLNDmKHFpo0wzZOOnKcoDhsDNvWMYs4qferdJLTwBFgm+fVjMcUMRrVseetgNbQAHeO+hgiZIfXRSU6bAXNacN0Tn3geER8udXFJT+/KJhOGD7EiH/viV8ysJh/Jy6UQEguUUtB4TXlMxCST91OUCjgB0bS6Rgxbw3+KLA2lQgT0rWLAQGngggIR7lun/iPIBoLNHda17jCnrIAAAAASUVORK5CYII="/>
            </button>
            <span className="title">Contact someone</span>
          </div>
        </figure>

        
    </div>
  )
}

export default Resumo