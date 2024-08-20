import './Home.css';
import Navbar from '../../components/navbar/Navbar';
import Resumo from '../../components/resumo/Resumo';
import Profissional from '../../components/profissional/Profissional';
import Stacks from '../../components/stacks/Stacks';
import Projetos from '../../components/projetos/Projetos';


function Home(){
    return (
        <div>
            <Navbar/>
            <Resumo/>
            <Stacks/>
            <Projetos/> 
            <Profissional/>
        </div>
    );
}

export default Home;