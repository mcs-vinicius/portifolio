import './Home.css';
import Navbar from '../../components/navbar/Navbar';
import Resumo from '../../components/resumo/Resumo';
import Profissional from '../../components/profissional/Profissional';

function Home(){
    return (
        <div>
            <Navbar/>
            <Resumo/>
            <Profissional/>
            
        </div>
    );
}

export default Home;