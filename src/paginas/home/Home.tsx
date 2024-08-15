import './Home.css';
import Navbar from '../../components/navbar/Navbar';
import Resumo from '../../components/resumo/Resumo';
import Profissional from '../../components/profissional/Profissional';
import Stacks from '../../components/stacks/Stacks';

function Home(){
    return (
        <div>
            <Navbar/>
            <Resumo/>
            <Profissional/>
            <Stacks/>
        </div>
    );
}

export default Home;